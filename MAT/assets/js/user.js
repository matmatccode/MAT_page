let currentMoney = 100;

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

let userİnfo = JSON.parse(localStorage.getItem("Users-information")) || [];
console.log(userİnfo);

let id = JSON.parse(localStorage.getItem("user")) || [];
console.log(id);

let name = document.querySelector(".name");

let price = document.querySelector(".price");

userİnfo.forEach((item) => {
  if (item.userName == id) {
    console.log("salam");
    console.log(item);
    name.innerText = item.userName;
    price.innerText = (+item.percent * currentMoney) / 100;
  }
});
