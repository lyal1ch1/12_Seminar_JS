// Задание:

// Необходимо найти короткое видео в интернете, либо ссылку на него,
// либо можно его скачать.
// Необходимо создать видеоплеер, с кнопками play/pause, ползунком, который
// движется, когда мы просматриваем видео, по которому можно перемотать видео.
// Также необходимо писать текущее время видео (должно меняться при просмотре).
// Должен быть ползунок громкости видео.

// Тайминг: ∞ минут.

const playEl = document.querySelector(".play-btn");
const videoEl = document.querySelector("video");
const currentTimeTextEl = document.querySelector(".current-time-text");
const fullTimeTextEl = document.querySelector(".full-time");
const timeCurrentInputEl = document.querySelector(".time-current-input");
const volumeEl = document.querySelector(".volume");

videoEl.addEventListener("canplay", function () {
  fullTimeTextEl.innerText = timeToString(videoEl.duration);
});

playEl.addEventListener("click", () => {
  if (videoEl.paused) {
    videoEl.play();
    playEl.src = "pause-solid.svg";
  } else {
    videoEl.pause();
    playEl.src = "play-solid.svg";
  }
});

volumeEl.addEventListener("input", () => {
  videoEl.volume = volumeEl.value;
});

timeCurrentInputEl.addEventListener("input", () => {
  videoEl.currentTime = (timeCurrentInputEl.value / 100) * videoEl.duration;
});

videoEl.addEventListener("timeupdate", () => {
  timeCurrentInputEl.value = (videoEl.currentTime / videoEl.duration) * 100;
  currentTimeTextEl.innerText = timeToString(videoEl.currentTime);
});

function timeToString(time) {
  const seconds = Math.trunc(time % 60);
  const minutes = Math.trunc(time / 60);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
}
