const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const colourBtn = document.getElementById("btn-colour");
const colour = document.querySelector(".colour");
//  eg #f15025

const colourChanger = function () {
  let hexColour = "#";
  for (let i = 0; i < 6; i++) {
    hexColour += hex[randomNumber()];
  }
  colour.textContent = hexColour;
  document.body.style.backgroundColor = hexColour;
};

const randomNumber = function () {
  return Math.floor(Math.random() * hex.length);
};

colourBtn.addEventListener("click", colourChanger);
