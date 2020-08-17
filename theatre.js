const txtSeats = document.getElementById("numberOfSeats");
const optmovies = document.getElementById("movies");
const txtOutput = document.getElementById("output");
const optdelivery = document.getElementById("delivery");
const btnCalculate = document.getElementById("Calculate");
optmovies.addEventListener("change", movieSelect);
btnCalculate.addEventListener("click", calculateCost);
optdelivery.addEventListener("change", deliverySelect);

let tickets;
let ticketPrice; //stores the of an individdual ticket
let movieChoice;
let discount;
let deliveryChoice;
let price;
let finalcost;

movieSelect();
deliverySelect();
function movieSelect() {
  movieChoice = optmovies.options[optmovies.selectedIndex].innerText;

  if (movieChoice == "Phantom of the Operal---£79") {
    ticketPrice = 79;
  } else if (movieChoice == "Hamilton---£85") {
    ticketPrice = 85;
  } else if (movieChoice == "Lion King----£67") {
    ticketPrice = 67;
  } else if (movieChoice == "Miss Saigon----£83") {
    ticketPrice = 83;
  }
}
function deliverySelect() {
  deliveryChoice = optdelivery.options[optdelivery.selectedIndex].innerText;
  if (deliveryChoice == "E-ticket --- Free") {
    deliveryPrice = 0;
  } else if (deliveryChoice == "Collect from Box Office --- £1.50") {
    deliveryPrice = 1.5;
  } else if (deliveryChoice == "Posted--£3.99") {
    deliveryPrice = 3.99;
  }
}
function calculateCost() {
  event.preventDefault();

  tickets = parseInt(txtSeats.value);
  let totalCost = tickets * ticketPrice;
  discount = 0;

  if (tickets >= 10) {
    discount = totalCost * 0.15;
  } else if (tickets >= 6) {
    discount = totalCost * 0.1;
  }
  console.log("Here");

  price = finalcost + deliveryPrice;
  finalcost = totalCost - discount;
  txtOutput.innerText = ` ${tickets} tickets for  ${movieChoice} at £${totalCost}
   Total Cost £${totalCost} 
  The discont is: £${discount}  
   ${deliveryChoice} 
  The payment is: £${price.toFixed(2)}`;
}
