// <script>
// Get the modal
let modal1 = document.getElementById('myModal1');

// Get the button that opens the modal
let btn1 = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
let span1 = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn1.onclick = function() {
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// </script>


// ============ Take two
// Get the modal
let modal2 = document.getElementById('myModal2');

// Get the button that opens the modal
let btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
let span2 = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn2.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal2.style.display = "none";
    }
}
