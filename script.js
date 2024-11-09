window.addEventListener('scroll', function() {
  const logo = document.getElementById('logo');
  const scrollY = window.scrollY;

  const maxFontSize = 10;
  const minFontSize = 5.8;
  
  let newFontSize = maxFontSize - (scrollY / 69); 

  newFontSize = Math.max(newFontSize, minFontSize);
  
  logo.style.fontSize = newFontSize + 'vw';
});

gsap.registerPlugin(ScrollTrigger);

gsap.set(".소개글", { opacity: 0 });

ScrollTrigger.create({
  trigger: ".소개글",
  start: "top 30%",
  onEnter: () => gsap.to(".소개글", { opacity: 1, duration: 0.7 }),
  onLeaveBack: () => gsap.to(".소개글", { opacity: 0, duration: 0.3 }),
});
gsap.registerPlugin(ScrollTrigger);

gsap.set("#팀원", { opacity: 1 });

ScrollTrigger.create({
  trigger: "#팀원",
  start: "top 35%",
  end: "top 50%",
  onEnter: () => gsap.to("#팀원", { opacity: 0, duration: 0.5 }),
  onLeaveBack: () => gsap.to("#팀원", { opacity: 1, duration: 0.5 }),
});

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".소개글",
  start: "top -30%",
  onEnter: () => {
    gsap.to(window, { duration: 1.7, scrollTo: ".second-section", ease: "power2.out"});
  },
});