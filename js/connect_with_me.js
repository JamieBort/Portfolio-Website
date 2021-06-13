var lets_action = document.getElementById('lets_action');
// var myArray=["Let's connect.", "Let's collaborate.", "Let's pair program.", "Let's Build Something Together"];
lets_action.innerHTML="pair program"; // Initial phrase while we're wating for the function to trigger.
var myArray=["connect", "collaborate", "pair program", "build something together"];
var t=0;
window.setInterval(function(){
    t++;
    lets_action.innerHTML=myArray[t%myArray.length];
    // console.log(myArray[t%myArray.length]);
}, 4000);