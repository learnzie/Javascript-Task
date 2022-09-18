document.addEventListener("DOMContentLoaded", getCardDetails);
const cardNumber = document.getElementById("number");
const cardName = document.getElementById("name");
const cardMonth = document.getElementById("month");
const cardYear = document.getElementById("year");
const cardCvc = document.getElementById("cvc");

function getCardDetails() {
  const cardDetail = JSON.parse(localStorage.getItem("cardDetail"));
  console.log(cardDetail);
  cardNumber.innerHTML = cardDetail.number;
  cardName.innerHTML = cardDetail.name;
  cardMonth.innerHTML = cardDetail.month;
  cardYear.innerHTML = cardDetail.year;
  cardCvc.innerHTML = cardDetail.cvc;
}
