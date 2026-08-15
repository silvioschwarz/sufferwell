const sidebar = document.querySelector(".sidebar");
const root = document.querySelector(":root");

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

