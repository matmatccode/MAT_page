// document.addEventListener("contextmenu", function (e) {
//   e.preventDefault();
// });
// document.addEventListener("mousedown", function (e) {
//   if (e.button === 2) {
//     e.preventDefault();
//   }
// });
// document.onkeydown = function (event) {
//   event = event || window.event;
//   if (event.keyCode == 123) {
//     return false;
//   }
// };

// window.addEventListener("keydown", function (e) {
//   if (e.ctrlKey) {
//     e.preventDefault();
//   }
// });
let form = document.querySelector("form");
let allInputs = document.querySelectorAll("input");
let usersInformation =
  JSON.parse(localStorage.getItem("Users-information")) || [];
let hideElem = document.querySelector(".fa-solid");
let inputPassword = document.querySelector("#password");

hideElem.addEventListener("click", function () {
  if (this.className === "fa-solid fa-eye-slash slash") {
    this.className = "fa-solid fa-eye slash";
    inputPassword.type = "text";
  } else {
    this.className = "fa-solid fa-eye-slash slash";
    inputPassword.type = "password";
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let newUser = usersInformation.find(
    (item) =>
      item.userName === allInputs[0].value.trim() &&
      item.password === allInputs[1].value.trim()
  );

  if (newUser) {
    localStorage.setItem("user", `"${newUser.userName}"`);
    allInputs.forEach((item) => {
      item.value = "";
    });
    window.location = "user.html";
  } else {
    window.alert("İstifadəçi adı və ya şifrə yanlışdır !!!");
    allInputs.forEach((item) => {
      item.value = "";
    });
  }
});
