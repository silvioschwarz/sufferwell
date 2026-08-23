/* =========================
   MATRIX BACKGROUND
========================= */

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters =
  "アァカサタナハマヤャラワガザダバパ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコ";

const fontSize = 16;
let columns = Math.floor(canvas.width / fontSize);

const drops = Array(columns).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff41";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const char = characters[Math.floor(Math.random() * characters.length)];

    ctx.fillText(char, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawMatrix, 35);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  columns = Math.floor(canvas.width / fontSize);

  drops.length = columns;

  for (let i = 0; i < columns; i++) {
    if (!drops[i]) drops[i] = 1;
  }
});

/* =========================
   TERMINAL
========================= */

const input = document.getElementById("command");
const screen = document.getElementById("screen");
const header = document.getElementById("header");

const toId = setTimeout(init, 2000);


function init() {
  var i = 0;

  if (i == 0) {
    i = 1;
    var width = 0;
    var id = setInterval(frame, 100);

    function frame() {
      header.innerHTML = "";
      if (width >= 100) {
        clearInterval(id);
        print("ALL YOUR SITE ARE BELONG TO US NOW!", header, "glitch");
        print("● ONLINE", header, "status");

        setTimeout(() => {
      print("ACCESS GRANTED.",);
      print(" ");
    }, 500);

    setTimeout(() => {
      print("Welcome, 8M9C99S_27.",);
      print(" ");
    }, 2000);

    setTimeout(() => {
      print('Type "help" for available commands.');
      print(" ");
    }, 3000);

        i = 0;
      } else {
        width++;
        print("▓".repeat(width), header);
        print(width + " %", header);
      }
    }
  }
}

function print(text, location = screen, classO="line") {

      let line = document.createElement("div");

    if(location == "header"){
        let line = document.createElement("span");
    }else{
    }

  line.className = classO;

  line.textContent = text;

  location.appendChild(line);

  location.scrollTop = location.scrollHeight;
}

input.addEventListener("keydown", function (event) {
  if (event.key !== "Enter") return;

  const command = input.value.trim();

  if (!command) return;

  print("8M9C99S_27@sufferwell:~$ " + command);

  processCommand(command);

  input.value = "";
});

function processCommand(command) {
  const cmd = command.toLowerCase();

  if (cmd === "help") {
    print("");
    print("AVAILABLE COMMANDS");
    print("------------------");
    print("help       - show this message");
    print("clear      - clear terminal");
    print("status     - system status");
    print("whoami     - identify operator");
    print("scan       - scan network");
    print("exit       - terminate session");
    print(" ");
  } else if (cmd === "clear") {
    screen.innerHTML = "";
  } else if (cmd === "status") {
    print(" ");
    print("SYSTEM STATUS: ONLINE");
    print("CPU: " + Math.floor(Math.random() * 40 + 20) + "%");
    print("MEMORY: " + Math.floor(Math.random() * 50 + 30) + "%");
    print("NETWORK: ENCRYPTED");
    print("UPTIME: " + Math.floor(Math.random() * 9999) + " seconds");
    print(" ");
  } else if (cmd === "whoami") {
     print(" ");
    print("OPERATOR: Smarti");
    print("CLEARANCE: ██████████");
    print("IDENTITY: 0x8M9C99S");
     print(" ");
  } else if (cmd === "scan") {
     print(" ");
    print("INITIALIZING NETWORK SCAN...");

    setTimeout(() => {
      print("NODE_01 ........ ONLINE");
      print("NODE_02 ........ ONLINE");
      print("NODE_03 ........ UNKNOWN");
      print("NODE_04 ........ ENCRYPTED");
      print("SCAN COMPLETE.");
    }, 500);
     print(" ");
  } else if (cmd === "exit") {
     print(" ");
    print("SESSION TERMINATED.");
    print("...");
    print("Just kidding. You're still here.");
     print(" ");
  } else {
     print(" ");
    print("COMMAND NOT FOUND: " + command);
    print('Type "help" for available commands.');
     print(" ");
  }
}
