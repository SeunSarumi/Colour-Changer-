const colours = ["green", "red", "rgba(133,122,200)", "#f15025"];
const colourBtn = document.getElementById("btn-colour");
const colour = document.querySelector(".colour");

const getRandomNumber = function () {
  return Math.floor(Math.random() * colours.length);
};

colourChanger = function () {
  // Get random Number between 0 and 3
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colours[randomNumber];
  colour.textContent = colours[randomNumber];
};

colourBtn.addEventListener("click", colourChanger);
