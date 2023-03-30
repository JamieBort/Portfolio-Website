// ./js/main.js

// ToDo: use JavaScript to name section_01, section01, and Bio, as only Bio in one location.

// **************************************************
//                  for the navigation 
// **************************************************

// this toggles the hidden nav window to appear or disappear
function toggleMenu(){
    console.log("inside the toggleMenu function");
    var element = document.getElementById('menu');
    if(element.style.display === "none"){
        element.style.display = "block";
    }else{
        // element.style.display = "none";
        closeMenu();
    }
};

// this navigates to a specific section of the page
function section(param){
    // console.log("param:", param)
    if(param>0) window.location = '#section0'+param;
    else window.location = '#top'; 
}

// for when the user taps off of the navigation menu, the navigation menu needs to close
function closeMenu() {
    console.log("event listener firing");
    var element = document.getElementById('menu');
    element.style.display = "none";
}

// Add event listener to page.
const el = document.getElementById("content");
el.addEventListener("click", closeMenu, false); // why false? --> "A boolean value indicating that the listener should be invoked at most once after being added. If true, the listener would be automatically removed when invoked. If not specified, defaults to false."

function mobileHeaderButton(){
    closeMenu();
    section(0)
}

// **************************************************
//                  for the navigation 
// **************************************************



// **************************************************
//                  For the footer
// **************************************************

const copyright = document.getElementById('copyright');
if(new Date().getFullYear()) var date = new Date().getFullYear();
else var date = "2023";
document.getElementById('copyright').appendChild(document.createTextNode(date));

// **************************************************
//                  For the footer
// **************************************************