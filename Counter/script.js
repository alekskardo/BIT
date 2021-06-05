let btnAdd = document.querySelector(".increase");
let btnSub = document.querySelector(".decrease");
let restart = document.querySelector(".reset");

let change = document.getElementById("value");

btnAdd.addEventListener("click", () => {
  change.innerHTML++;
});

btnSub.addEventListener("click", () => {
  change.innerHTML--;
});

restart.addEventListener("click", () => {
  
  change.innerHTML = 0;
});
