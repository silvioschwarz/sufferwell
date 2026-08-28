import { pixelatePicture } from "./pixalate.js";

const phaseDiv = document.getElementById("phase");
const countdownDiv = document.getElementById("countdown");
const countdownDiv2 = document.getElementById("countdown2");
const imgDiv = document.getElementById("imgDiv");
const img1Div = document.getElementById("img1Div");
const img2Div = document.getElementById("img2Div");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const fireworkContainer = document.getElementById("firework-container");
const playVideo = document.getElementById("playVideo");
const playAudio = document.getElementById("playAudio");

const main = document.getElementById("main");

playVideo?.addEventListener("click", function () {
  var video = document.createElement("video");
  video.src = "img/8M9C9S27.mp4";
  video.controls = true;
  video.autoplay = true;
  video.muted = true;
  video.preload = "none";
  //video.loading = "lazy";
  video.style.maxWidth = "100dvw";
  video.style.maxHeight = "70dvh";

  var audio = document.createElement("audio");
  audio.src = "audio/sub_clair-happy-birthday-578363.mp3";
  audio.controls = true;

  audio.play();

  var audioText =
    'Music by <a href="https://pixabay.com/de/users/sub_clair-55456531/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=578363">Sub_Clair</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=578363">Pixabay</a>';
  var textAudio = document.createElement("div");
  textAudio.classList.add("txtaudio");
  textAudio.innerHTML = audioText;

  document.body.classList.add("bgcolor");

  main.innerHTML = "";
  main.appendChild(video);
  main.appendChild(audio);
  main.appendChild(textAudio);
});

function countdownFunction() {
  let countdownDate = new Date("Sep 8, 2026 7:59:59").getTime();
  let now = new Date().getTime();
  let distance = countdownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //let weeks = Math.floor(days / 7);

  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  let weeks = localStorage.getItem("Weeks");

  let phaseNum = days - (weeks -1) * 7;

  if (phaseDiv) {
    phaseDiv.innerHTML = "Phase " + (6 - weeks) + " of 6";

      countdownDiv.innerHTML =
        phaseNum + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      countdownDiv2.innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    let pixImg1 = pixelatePicture("./img/Bird.jpg", weeks*265);
    let pixImg2 = pixelatePicture("./img/Finger.jpg", weeks*256);

    pixImg1
      .then((canvas) => {
        img1Div.innerHTML = "";
        img1Div.appendChild(canvas);
      })
      .catch((error) => {
        console.error("Error pixelating image:", error);
      });

    pixImg2
      .then((canvas) => {
        img2Div.innerHTML = "";
        img2Div.appendChild(canvas);
      })
      .catch((error) => {
        console.error("Error pixelating image:", error);
      });
  }

  distance = localStorage.getItem("Distance");

  if (distance < 0) {
    countdownDiv.innerHTML = "Happy Birthday";
    countdownDiv2.innerHTML = "";

    imgDiv.parentNode.removeChild(imgDiv);

    playVideo.classList.toggle("hide");
    playVideo.innerHTML = " Play Video ";

    for (let i = 0; i < 4; i++) {
      const tempElement = document.createElement("div");
      tempElement.classList.toggle("firework");
      tempElement.innerHTML = i + 1;
      fireworkContainer.appendChild(tempElement);
    }
  }
}

window.onload = function () {
  var id = setInterval(countdownFunction, 1000);

  if (localStorage.getItem("Distance") < 0) {
    clearInterval(id);
    countdownFunction();
  }
};
