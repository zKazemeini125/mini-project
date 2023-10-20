const colorCounter = 49;
const Source = "1234567890ABCDEF";

let colorCode = "#";
let colorLength = 6;
let container = document.querySelector(".container");

for (let index = 0; index < colorCounter; index++) {
  //CREATE COLOR ELEMENT
  for (let i = 0; i < colorLength; i++) {
    //CREATE COLORCODE
    let randomNum = +Math.floor(Math.random() * Source.length);
    colorCode = colorCode + Source[randomNum];
  }

  let newColoBox = document.createElement("div");

  container.appendChild(newColoBox);
  newColoBox.classList.add("color");
  newColoBox.innerText = colorCode;
  newColoBox.style.setProperty("--colorCode", colorCode);
  colorCode = "#";
}
