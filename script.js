gsap.from(".navbar", {
  duration: 1,
  y: -80,
  opacity: 0,
});

gsap.from(".main-title", {
  duration: 1,
  y: -50,
  opacity: 0,
});

gsap.from(".feature-card", {
  duration: 1,
  opacity: 0,
  y: 30,
  stagger: 0.3,
});
