document.addEventListener("DOMContentLoaded", () => {
  const brain = document.querySelector(".hero-image img");

  if (!brain) return;

  // 初期セット
  brain.style.transition = "transform 0.2s ease-out";

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const translateY = scrollY * 0.25; // スクロール量に応じて動く

    brain.style.transform = `translateY(${translateY}px)`;
  });
});
