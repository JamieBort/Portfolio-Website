// From: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal2

// Get the modal
var modal1 = document.getElementById('myModal1');
var modalTwo = document.getElementById('myModalTwo');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
var btnTwo = document.getElementById("myBtnTwo");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");

// The [0] below effects the implementation of the dissabled onclick function below. //
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}

btnTwo.onclick = function() {
  modalTwo.style.display = "block";
}

btn2.onclick = function() {
  modal2.style.display = "block";
}

btn3.onclick = function() {
  modal3.style.display = "block";
}


// Dissabling this because I cannot get it to work (yet). //
// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }

  if (event.target == modalTwo) {
    modalTwo.style.display = "none";
  }

  if (event.target == modal2) {
    modal2.style.display = "none";
  }

  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

// Implement this for devices with a keyboard. //
// When the user presses a key, close it.
