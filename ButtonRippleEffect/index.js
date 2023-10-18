const elButton = document.querySelector(".btn");

elButton.addEventListener("mouseover", function (e) {
  var x = e.clientX - elButton.offsetLeft;
  var y = e.clientY - elButton.offsetTop;
  elButton.style.setProperty("--xPos", x + "px");
  elButton.style.setProperty("--yPos", y + "px");
});
