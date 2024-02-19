let currentMoney = 1000000;

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

let a = localStorage.getItem("user");
let usernamee = a;
console.log(usernamee);

let b = localStorage.getItem("percent");
let percent = b;
console.log(percent);

let namee = document.querySelector(".name");

let price = document.querySelector(".price");

namee.innerText = usernamee;
price.innerText = (+percent * currentMoney) / 100;
