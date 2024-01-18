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

let login = document.querySelector(".login-btn");
let signUp = document.querySelector(".sign-up-btn");

login.addEventListener("click", function () {
  window.location = "login.html";
});
signUp.addEventListener("click", function () {
  window.location = "sign-up.html";
});
