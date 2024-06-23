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
    timeline.from(".projects-container", {
      opacity: 0,
      scale: .5,
      ease: "sine.out",
    }, "-=.7");

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

export const AboutHeadAnimation = () => {
  useGSAP(() => {
    var abtHeadTimeline = gsap.timeline();
    abtHeadTimeline.from("#about-head-inner > h1", {
      opacity: 0,
      x: -100,
      ease: "power3.out",
    }, "abtAnim");
    abtHeadTimeline.from("#about-head-inner > .about-right > *", {
        opacity: 0,
        x: 100,
        ease: "power3.out",
        stagger: 0.1,
      }, "abtAnim");
    abtHeadTimeline.from(".about-img", {
      opacity: 0,
      scale: 0,
      duration: 1,
      ease: "sine.out",
    }, "-=.4")
  })
};

export const SkillsAnimation = () => {
  useGSAP(() => {
    var skillsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#skills",
        scroller: "#root",
        start: "top 50%",
        end: "top 50%",
        scrub: 2,
      },
    });
    skillsTimeline.from("#skills > h1", {
      opacity: 0,
      x: -100,
      ease: "power3.out",
    }, "skillAnim");
    skillsTimeline.from(".skill-description > p", {
        opacity: 0,
        x: 100,
        ease: "power3.out",
        stagger: 0.2,
    }, "skillAnim");
    skillsTimeline.from(".skill-description >.all-skills", {
      opacity: 0,
      scale: 0,
      ease: "circ.out",
      duration: .5,
    }, "skillAnim");
  });
}