const inputElement = document.querySelector("input.number-input");
const cardText = document.getElementById("number");
inputElement.addEventListener("input", () => {
  cardText.innerText = inputElement.value;
});

const inputName = document.querySelector("input.name-input");
const cardName = document.getElementById("name");

inputName.addEventListener("input", () => {
  cardName.innerText = inputName.value;
});

// const inputMonth = document.querySelector("input.name-input");
// const cardName = document.getElementById("name");

// inputName.addEventListener("input", () => {
//   cardName.innerText = inputName.value;
// });
