import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);

const select = (e) => document.querySelector(e);
const selectAll = (e) => document.querySelectorAll(e);
const menuLink = select(".menuLinks");
const imageGrid = select(".image-grid");
const intro__images = select(".intro__images");
const images = selectAll(".intro__images img");
const header = selectAll(".headAnime");
const stagged = selectAll(".stagged");
const main = select("main");
const line = selectAll(".line");
var tl = gsap.timeline();

gsap.set(stagged, {
  opacity: 0,
});

gsap.set(header, {
  opacity: 0,
});

const fadeUpimages = () => {
  return tl.from(images, {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3",
    stagger: 0.02,
    onComplete: () => moveImagesToCenter(),
  });
};

const moveImagesToCenter = () => {
  const state = Flip.getState(images);
  intro__images.classList.remove("initial");
  intro__images.classList.add("img_center");

  return Flip.from(state, {
    duration: 2,
    ease: "expo.inOut",
    stagger: 0.15,
    onComplete: () => scaleToBottom(),
  });
};

const scaleToBottom = () => {
  const state = Flip.getState(images);
  intro__images.classList.remove("img_center");
  intro__images.classList.add("hidden");

  images.forEach((img) => {
    imageGrid.appendChild(img);
  });

  return Flip.from(state, {
    duration: 2,
    ease: "expo.inOut",
    stagger: 0.15,
    absolute: true,
    onComplete: () => infoAnimation(),
  });
};

const infoAnimation = () => {
  const tl = gsap.timeline({ delay: 0.6, ease: "linear" });
  tl.to(
    stagged,
    {
      y: -60,
      stagger: 0.2,
      opacity: 1,
    },
    "start"
  )
    .to(
      header,
      {
        stagger: 0.2,
        opacity: 1,
        y: 20,
      },
      "start"
    )
    .from(
      line,
      {
        y: 70,
        stagger: 0.2,
        ease: "power4",
        duration: 1.3,
      },
      "start"
    );
};

fadeUpimages();

menuLink.addEventListener("mouseenter", () => {
  tl.fromTo(
    menuLink,
    { rotate: 0 },
    { transformOrigin: "top right", rotate: "10", ease: "back" }
  );
});
