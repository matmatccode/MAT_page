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
let hideElem = document.querySelector(".fa-solid");
let inputPassword = document.querySelector("#password");
let form = document.querySelector("form");
let usersInformation =
  JSON.parse(localStorage.getItem("Users-information")) || [];
let allInputs = document.querySelectorAll("input");

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

  let checkProcess = usersInformation.some(
    (item) =>
      item.userName === allInputs[0].value || item.email === allInputs[1].value
  );

  if (!checkProcess) {
    let userObj = {
      userName: allInputs[0].value.trim(),
      email: allInputs[1].value.trim(),
      fin: allInputs[2].value.trim(),
      password: allInputs[3].value.trim(),
      id: Date.now(),
      percent: 0.05,
    };

    usersInformation.push(userObj);
    localStorage.setItem("Users-information", JSON.stringify(usersInformation));
    window.location = "information.html";
  } else {
    window.alert("Name or email already used!");
  }
  allInputs.forEach((item) => {
    item.value = "";
  });
});
