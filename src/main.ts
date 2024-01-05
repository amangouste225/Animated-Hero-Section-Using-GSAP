import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

lenis.on("scroll", (e) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const select = (e) => document.querySelector(e);
const animated = select(".animated-element");
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".animated-element",
    start: "-50% center",
    end: "bottom center",
    scrub: true,
    markers: true,
  },
});

tl.to(".animated-element", {
  left: 800,
});
