let elPassword = document.getElementById("input");
let elButton = document.getElementById("btn");
let elCopyButton = document.querySelector(".fa-copy");
let elAlert = document.querySelector(".alertContainer");
let elAlertContent = document.getElementById("alertContent");

function generatPassword() {
  let SourceChar =
    "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM123456789!@#$%&";
  let pasLength = 10;
  let password = "";
  for (let counter = 0; counter < pasLength; counter++) {
    let randomNum = Math.floor(Math.random() * SourceChar.length);
    //each of the following line can create random Password
    //password += SourceChar.substring(randomNum,randomNum+1);//*
    password += SourceChar[randomNum]; //*
  }
  elPassword.value = password;
}

elCopyButton.addEventListener("click", () => {
  copyPassword();
  elAlert.classList.remove("active");
  setTimeout(() => {
    elAlert.classList.add("active");
  }, 2000);
});

function copyPassword() {
  elPassword.select();
  //var successful = document.execCommand("copy");
  navigator.clipboard.writeText(elPassword.value);
  elAlertContent.innerHTML = elPassword.value + " copied!";
}
