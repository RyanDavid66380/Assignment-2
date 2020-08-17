//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const txtOutput = document.getElementById("output");



//calling out id's for task 2
const CollectTxt  = document.getElementById("Collect");
const EtickectTxt  = document.getElementById("etickect");
const PostTxt  = document.getElementById("Post");
const  GoBtn = document.getElementById("Go");
//event listner for task 2
GoBtn.addEventListener("click", Go);

function Go(){
    //get selected radio button
    event.preventDefault();


}


//read more tab
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtnone");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}