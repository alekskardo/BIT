let btnAdd = document.querySelector(".increase");
let btnSub = document.querySelector(".decrease");
let restart = document.querySelector(".reset");

let change = document.getElementById("value");
let integer = 0;

btnAdd.addEventListener("click", () => {
  integer++;
  change.innerHTML = integer;
});

btnSub.addEventListener("click", () => {
  integer--;
  change.innerHTML = integer;
});

restart.addEventListener("click", () => {
  change.innerHTML = 0;
});
