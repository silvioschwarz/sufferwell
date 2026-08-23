const sidebar = document.querySelector(".sidebar");
const root = document.querySelector(":root");

const embed = document.getElementById("embed");

function show() {
  // swipe right
  sidebar.style.width = "15dvh";
  root.style.setProperty("--sidenav-margin", "15dvh");
  sidebar.classList.add("visible");
  document.body.style.overflow = "hidden";
}
function hide() {
  // by blocker click, swipe left, or url change
  sidebar.style.width = "0px";
  root.style.setProperty("--sidenav-margin", "0px");

  sidebar.classList.remove("visible");
  document.body.style.overflow = "";
}
function toggle() {
  sidebar.classList.contains("visible") ? hide() : show();
}

let countdownDate = new Date("Sep 8, 2026 7:59:59").getTime();
let now = new Date().getTime();
let distance = countdownDate - now;
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let weeks = Math.round(days / 7);

let phaseNum = days - weeks * 7;

console.log(weeks)

if (weeks == 2) {
  embed.setAttribute("src","./8M9C99S_27/matrix.html");
}
