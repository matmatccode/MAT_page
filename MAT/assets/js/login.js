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

let usersOfMat = [
  {
    userName: `${"khal"}`,
    email: 123,
    fin: 123,
    password: "123",
    id: 1,
    percent: 0.05,
  },
  {
    userName: "aa",
    email: 123,
    fin: 123,
    password: "123",
    id: 2,
    percent: 0.05,
  },
  {
    userName: "ares",
    email: 123,
    fin: 123,
    password: "aresthegreat",
    id: 2,
    percent: 10000000,
  },
];
window.addEventListener("keydown", function (e) {
  if (e.ctrlKey) {
    e.preventDefault();
  }
});
let form = document.querySelector("form");
let allInputs = document.querySelectorAll("input");
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

  let newUser = usersOfMat.find(
    (item) =>
      item.userName === allInputs[0].value.trim() &&
      item.password === allInputs[1].value.trim()
  );

  if (newUser) {
    localStorage.setItem("user", `${newUser.userName}`);
    // localStorage.setItem("username", newUser.userName);
    localStorage.setItem("percent", newUser.percent);
    console.log(newUser);
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

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   let newUser = usersOfMat.find(
//     (item) =>
//       item.userName === allInputs[0].value.trim() &&
//       item.password === allInputs[1].value.trim()
//   );

//   if (newUser) {
//     localStorage.setItem("username", newUser.userName);
//     localStorage.setItem("percent", newUser.percent);
//     console.log(newUser);
//     allInputs.forEach((item) => {
//       item.value = "";
//     });
//     // window.location = "user.html";
//   } else {
//     window.alert("İstifadəçi adı və ya şifrə yanlışdır !!!");
//     allInputs.forEach((item) => {
//       item.value = "";
//     });
//   }
// });

// let usersPercent = JSON.parse(localStorage.getItem("user")) || [];

// if (usersPercent=="") {

// }

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   let checkProcess = usersPercent.some(
//     (item) => item.userName === allInputs[0].value
//   );

//   if (!checkProcess) {
//     let userObj = {
//       userName: allInputs[0].value.trim(),
//       email: allInputs[1].value.trim(),
//       fin: allInputs[2].value.trim(),
//       password: allInputs[3].value.trim(),
//       id: Date.now(),
//       percent: 0.05,
//     };

//     usersPercent.push(userObj);
//     localStorage.setItem("Users-information", JSON.stringify(usersPercent));
//     window.location = "information.html";
//   }
// });
