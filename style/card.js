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

const inputMonth = document.querySelector("input.number-month");
const cardMonth = document.getElementById("month");

inputMonth.addEventListener("input", () => {
  cardMonth.innerText = inputMonth.value;
});

const inputYear = document.querySelector("input.number-year");
const cardYear = document.getElementById("year");

inputYear.addEventListener("input", () => {
  cardYear.innerText = inputYear.value;
});

const inputCvc = document.querySelector("input.number-cvc");
const cardCvc = document.getElementById("cvc");

inputCvc.addEventListener("input", getCvc);
function getCvc(event) {
  cardCvc.innerText = inputCvc.value;
}

const submitButton = document.querySelector("button.btn-submit");
submitButton.addEventListener("click", submitForm);

function submitForm(event) {
  event.preventDefault();
  if (inputElement.value == "") {
    const doIt = document.getElementById("error-number");
    doIt.innerText = "Can't be blank";
  } else {
    window.location.replace("./completed.html");
  }
  if (inputName.value == "") {
    const doIt = document.getElementById("error-name");
    doIt.innerText = "Enter your name";
  }
  if (inputCvc.value == "") {
    const doIt = document.getElementById("error-cvc");
    doIt.innerText = "Can't be blank";
  }
  if (inputYear.value == "" && inputMonth.value == "") {
    const doIt = document.getElementById("error-date");
    doIt.innerText = "Can't be blank";
  }
}

// inputCvc.addEventListener("input", () => {
//   cardCvc.innerText = inputCvc.value;
// });
// Wrong format, numbers onlu
