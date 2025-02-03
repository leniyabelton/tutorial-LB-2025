const buttonA = document.querySelector("#buttonA");
const headingA = document.querySelector("#headingA");

let count = 1;

buttonA.onclick = () => {
  buttonA.textContent = "Try again!";
  headingA.textContent = `${count} clicks so far`;
  count += 1;
};