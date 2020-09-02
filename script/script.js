window.addEventListener("load", loadHandler);

function loadHandler() {
  // create pull me up button
  var button =
    '<button onclick="topFunction()" id="myBtn" title="Go to top">↑</button>';
  document.body.innerHTML = document.body.innerHTML + button;

  // trygin to call typewriter script on landing page
  typewriter();
}

// PRINT TEXT
// set up text to print, each item in array is new line
var aText = new Array("i'm kesha,", "I do pROducT deSign.", "↓");
var iSpeed = 90; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ""; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
  sContents = " ";
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById("typedtext");

  if (destination == null) return;

  while (iRow < iIndex) {
    sContents += aText[iRow++] + "<br />";
  }
  destination.innerHTML =
    sContents + aText[iIndex].substring(0, iTextPos) + "_";
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 500);
    }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}

//HAMBURGER MENU
function myFunctionNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "nav-main") {
    x.className += " responsive";
  } else {
    x.className = "nav-main";
  }
}

// PROGRESS BAR
// When the user scrolls the page, execute myFunction
window.addEventListener("scroll", myFunction);

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// //PULL ME UP HANDLE
//       //Get the button

// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  var mybutton = document.getElementById("myBtn");
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
