import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";
import { Flip } from "gsap/Flip";
import { getLenisInstance } from "./lenisInstance";

const lenis = getLenisInstance();
lenis.on("scroll", ScrollTrigger.update);

gsap.registerPlugin(ScrollTrigger, CustomEase, SplitText, Flip);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

export { gsap, ScrollTrigger, SplitText, Flip };
