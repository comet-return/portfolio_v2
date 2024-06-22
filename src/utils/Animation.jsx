import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const HeaderAnimation = () => {
  useGSAP(() => {
    let dropdownTimeline = gsap.timeline();
    dropdownTimeline.from("nav", {
        duration: 1,
        opacity: 0,
        y: -100,
        ease: "power3.out",
        touchAction: "play pause resume reset",
    })
    dropdownTimeline.from("nav > .navs", {
        duration: 1,
        opacity: 0,
        x: 100,
        ease: "power3.out",
        touchAction: "play pause resume reset",
    }, "-=.5")
  })
}

export const HeroAnimation = () => {
  useGSAP(() => {
    gsap.from(".headline > *", {
      duration: 1,
      opacity: 0,
      x: -100,
      ease: "power3.out",
      stagger: 0.2,
    });
    gsap.from(".hero-img", {
      duration: 1.5,
      opacity: 0,
      x: 200,
      ease: "power3.out",
    });
  });
};

export const ProjectAnimation = () => {
  useGSAP(() => {
    var timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects-section",
        scroller: "#root",
        start: "top 75%",
        end: "top -35%",
        scrub: 2,
      },
    });
    timeline.from(".projects-section > h1, .projects-section > p", {
      opacity: 0,
      x: -100,
      ease: "power3.out",
      stagger: 0.2,
    });
    timeline.from(
      ".projects-container > :nth-child(odd)",
      {
        opacity: 0,
        x: -100,
        ease: "power3.out",
        stagger: 0.2,
      },
      "anim"
    );
    timeline.from(
      ".projects-container > :nth-child(even)",
      {
        opacity: 0,
        x: 100,
        ease: "power3.out",
        stagger: 0.2,
      },
      "anim"
    );
  });
};

export const AboutAnimation = () => {
  useGSAP(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        scroller: "#root",
        start: "top center",
        end: "bottom center",
        toggleActions: "play pause resume reset",
      },
    });
    tl.from(".about > h1", {
      opacity: 0,
      x: -100,
      ease: "power3.out",
    });
    tl.from(
      ".about-description > *",
      {
        opacity: 0,
        x: -100,
        ease: "power3.out",
        stagger: 0.2,
      },
      "-=.2"
    );
  });
};

export const ContactAnimation = () => {
  useGSAP(() => {
    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact",
        scroller: "#root",
        start: "top center",
        end: "bottom center",
      },
    });
    tl2.from(".contact > .contact-left > *", {
      opacity: 0,
      x: -100,
      ease: "power3.out",
      stagger: 0.2,
    }, "anim2");
    tl2.from(
      ".contact > .contact-right > form > *", {
        opacity: 0,
        x: 100,
        ease: "power3.out",
        stagger: 0.2,
    }, "anim2");
  });
}