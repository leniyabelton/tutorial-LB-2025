const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";


document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});
/*
let myVariable = document.querySelector("h1");
alert("hello!");
*/

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "GRA.jpeg") {
    myImage.setAttribute("src", "images/GRP.jpeg");
  } else {
    myImage.setAttribute("src", "images/GRA.jpeg");
  }
});

let myButton = document.querySelector("button");
let myHeading2 = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading2.textContent = `Life Is Golden, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading2.textContent = `Life Is Golden, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});

