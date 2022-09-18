const inputNumber = document.querySelector("input.number-input");
const cardNumber = document.getElementById("number");
const err_num = document.getElementById("error-number");
const err_name = document.getElementById("error-name");
const err_cvc = document.getElementById("error-cvc");
const err_date = document.getElementById("error-date");
let formError = false;

inputNumber.addEventListener("input", () => {
  cardNumber.innerText = inputNumber.value;
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

const form = document.querySelector("#form");
form.addEventListener("submit", submitForm);

const EmptyFormError = () => {
  if (formError) {
    formError = false;
    err_num.innerText = "";
    err_cvc.innerText = "";
    err_date.innerText = "";
    err_name.innerText = "";
  }
};
const formControls = document.getElementsByClassName("form-control");
[...formControls].forEach((element) => {
  element.addEventListener("input", EmptyFormError);
});

onHandleChangeNumeric = (e) => {
  let valu = e.target.value;

  if (!Number(valu)) {
    return;
  }

  onChange(e.target.value);
};

function submitForm(event) {
  event.preventDefault();
  const namePattern = /^[A-Za-z]+$/;
  if (inputNumber.value == "") {
    err_num.innerText = "Can't be blank";
    formError = true;
  } else if (isNaN(inputNumber.value)) {
    err_num.innerText = "Wrong format, numbers only";
  }
  if (inputName.value == "") {
    err_name.innerText = "Enter your name";
    formError = true;
  } else if (!namePattern.test(inputName.value)) {
    err_name.innerText = "Wrong format, alphabets only";
  }
  if (inputCvc.value == "") {
    err_cvc.innerText = "Can't be blank";
    formError = true;
  } else if (isNaN(inputCvc.value)) {
    err_cvc.innerText = "Wrong format, numbers only";
  }
  if (inputYear.value == "" || inputMonth.value == "") {
    err_date.innerText = "Can't be blank";
    formError = true;
  } else if (isNaN(inputYear.value || inputMonth.value == "")) {
    err_date.innerText = "Wrong format, numbers only";
  }
  if (!formError) {
    const cardDetail = {
      number: inputNumber.value,
      name: inputName.value,
      cvc: inputCvc.value,
      year: inputYear.value,
      month: inputMonth.value,
    };
    localStorage.setItem("cardDetail", JSON.stringify(cardDetail));
    window.location.replace("./completed.html");
  }
}
