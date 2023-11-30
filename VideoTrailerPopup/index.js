const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".closeIcon");
const trilarContainerEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");

btnEl.addEventListener("click", () => {
  trilarContainerEl.classList.remove("active");
});
closeIconEl.addEventListener("click", () => {
  trilarContainerEl.classList.add("active");
  videoEl.pause();
  videoEl.currentTime = 0;
});
