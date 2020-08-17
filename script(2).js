const spinBtn = document.getElementById("spin");
const creditBtn = document.getElementById("credit");
const collectBtn = document.getElementById("collect");

const creditTxt = document.getElementById("creditOutput");
const winningsTxt = document.getElementById("winningsOutput");
const messageTxt = document.getElementById("message");

const firstImg = document.getElementById("img1");
const secondImg = document.getElementById("img2");
const thirdImg = document.getElementById("img3");

let credit = 0;
let winnings = 0;

spinBtn.addEventListener("click", spin);
creditBtn.addEventListener("click", add);
collectBtn.addEventListener("click", collect);

let apple = "apple.png";
let banana = "banana.png";
let bar = "bar.png";
let cherry = "cherries.png";
let grape = "grapes.png";
let lemon = "lemon.png";
let melon = "melon.png";
let orange = "orange.png";
let images = [apple, banana, bar, cherry, grape, lemon, melon, orange];
let selectionfirstImg = Math.floor(Math.random() * 8);
let selectionsecondImg = Math.floor(Math.random() * 8);
let selectionthirdImg = Math.floor(Math.random() * 8);
firstImg.innerHTML = "<img src=" + images[selectionfirstImg] + ">";
secondImg.innerHTML = "<img src=" + images[selectionsecondImg] + ">";
thirdImg.innerHTML = "<img src=" + images[selectionthirdImg] + ">";
function spin() {
  if (credit > 0) {
    credit -= 1;
    creditTxt.innerText = credit;
    selectionfirstImg = Math.floor(Math.random() * 8);
    selectionsecondImg = Math.floor(Math.random() * 8);
    selectionthirdImg = Math.floor(Math.random() * 8);
    firstImg.innerHTML = "<img src=" + images[selectionfirstImg] + ">";
    secondImg.innerHTML = "<img src=" + images[selectionsecondImg] + ">";
    thirdImg.innerHTML = "<img src=" + images[selectionthirdImg] + ">";
    winner = false;
    if (
      selectionfirstImg == selectionsecondImg &&
      selectionfirstImg == selectionthirdImg
    ) {
      messageTxt.innerText = "3 matching fruits!  10 points!";

      winnings += 10;
      winningsTxt.innerText = winnings;
      winner = true;
    }
    if (
      selectionfirstImg != selectionsecondImg &&
      selectionsecondImg == selectionthirdImg
    ) {
      messageTxt.innerText = "2 fruits! 5 points!";
      winnings += 5;
      winningsTxt.innerText = winnings;
      winner = true;
    }
    if (!winner) {
      messageTxt.innerText = "bad luck, try spinning again!";
    }
  }
}

function add() {
  credit += 1;
  creditTxt.innerText = credit;
  messageTxt.innerText = "Credit has been added, Spin to win more !";
}

function collect() {
  if (winnings == 0) {
    messageTxt.innerText =
      "no avalible winnings, keeping spinning to win some!";
  } else {
    winnings = 0;
    winningsTxt.innerText = winnings;
    messageTxt.innerText = "You have collected your points !!!";
  }
}
