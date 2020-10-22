// JavaScript file for the blog.
// This file might be just a playground to figure the code out. At which point it might be copied to a master JavaScript file.
// Alternatively these JavaScript files might be kept separate. And linked togther in the Master.js file.

// from https://developer.mozilla.org/en-US/docs/Web/API/File/File
var file = new File(["foo"], `../html/blog.html`);
console.log(file.name);
console.log(file.lastModified);
const date = document.getElementById("date");
date.innerHTML = file.lastModified;

// const name = document.getElementById("name");
// name.innerHTML= file.name;

// var name = document.getElementById("helper").getAttribute("data-name");
// var name = document.getElementById("helper");
// var name = document.getElementById("helper").getAttribute(`data-name`);
// console.log(name);

var me = document.querySelector('script[data-id][data-name="MyUniqueName"]');
var id = me.getAttribute('data-id');
console.log(me);
console.log(id);
var fileName = me.getAttribute('file_name');
console.log(fileName);

const name = document.getElementById("name");
name.innerHTML = fileName;

// from: https://stackoverflow.com/a/32938450/8210460



var script = document.currentScript;
var fullUrl = script.src;
console.log(script);
console.log(fullUrl);

var newPath = document.getElementById('myHtml').src = fullUrl;
var myHtml =  document.getElementById('myHtml');
myHtml.innerHTML=newPath;

// var script = document.currentScript;
// var fullUrl = script.src;
// console.log(script);
// console.log(fullUrl);
