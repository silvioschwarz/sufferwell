import { pixelatePicture, createPixelatedCanvas } from './pixalate.js';

const phaseDiv = document.getElementById("phase");
const countdownDiv = document.getElementById("countdown");
const countdownDiv2 = document.getElementById("countdown2");
const imgDiv = document.getElementById("imgDiv");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const playVideo = document.getElementById("playVideo");

const main = document.getElementById("main");

playVideo.addEventListener("click", function() {
    var video = document.createElement("video");
    video.src = "8M9C99S_27/img/8M9C9S27.mp4";
    video.controls = true;
    video.autoplay = true;
    video.style.maxWidth = "100vw";
    video.style.maxHeight = "80vh";

    main.innerHTML = "";
    main.appendChild(video);
});

var countdownDate = new Date("Sep 8, 2026 7:59:59").getTime();

var countdownFunction = setInterval(function() {
    var now = new Date().getTime();
    var distance = countdownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var weeks = Math.round(days/7);

    phaseDiv.innerHTML = "Phase " + (4 - weeks + 1) + " of 5";

    var phaseNum = days - (weeks-1) * 7;

    countdownDiv.innerHTML = phaseNum + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    countdownDiv2.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    var pixImg1 = pixelatePicture("8M9C99S_27/img/Bird.jpg", weeks*128)
    var pixImg2 = pixelatePicture("8M9C99S_27/img/Finger.jpg", weeks*128)

    pixImg1.then((canvas) => {
        img1.innerHTML = "";
        img1.appendChild(canvas);
          
        }).catch((error) => {
            console.error("Error pixelating image:", error);
        })
        
    pixImg2.then((canvas) => {
                img2.innerHTML = "";
            img2.appendChild(canvas);
        }).catch((error) => {
            console.error("Error pixelating image:", error);
        })


    if (distance < 20) {
        playVideo.classList.toggle("hide");
        playVideo.innerHTML = " Play Video "; 
        clearInterval(countdownFunction); 
    }
        


    if (distance < 0) {
        clearInterval(countdownFunction);
        countdownDiv.innerHTML = "EXPIRED";
    }
}, 1000);


const sendMail = () => {
  const mailAdress = "someone@example.com"
  const ccRecipients =  "mrinal.annand@gmail.com"
  const subject = encodeURIComponent("This is my subject")
  const body = encodeURIComponent(document.getElementById('myText').value)
  const  link= `mailto:${mailAdress}?cc=${ccRecipients}&subject=${subject}&body=${body}`
  window.location.href = link;
}


var agentDetails = navigator.userAgent;
console.log("User Agent: " + agentDetails);