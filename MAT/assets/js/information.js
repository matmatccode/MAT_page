document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
document.addEventListener("mousedown", function (e) {
  if (e.button === 2) {
    e.preventDefault();
  }
});
document.onkeydown = function (event) {
  event = event || window.event;
  if (event.keyCode == 123) {
    return false;
  }
};

window.addEventListener("keydown", function (e) {
  if (e.ctrlKey) {
    e.preventDefault();
  }
});

let arr = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
];

let inputRandom = document.querySelector(".input-random");

let randomText = document.querySelector(".random-text");
function createRandomText() {
  let password = "";

  for (let i = 0; i < 8; i++) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    password += arr[randomIndex];
  }

  randomText.innerText = password;
}
createRandomText();
let btn = document.querySelector(".btn-of-check");
btn.addEventListener("click", function () {
  if (inputRandom.value == randomText.innerText) {
    btn.setAttribute("href", "login.html");
  } else {
    inputRandom.style.border = "1px solid red";
  }
});
