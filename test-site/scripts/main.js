// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World!';

// Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function(){

var mySrc = myImage.getAttribute('src');
if(mySrc === 'images/firefox-image.png') {
	myImage.setAttribute('src','images/firefox2-image.png');
} else{
	myImage.setAttribute('src','images/firefox-image.png');
}

}

// Personalized welcome message code

// Personalized welcome message code

//  var myButton = document.querySelector('button');
//  var myHeading = document.querySelector('h1');

// // function setUserName() {
// //  	var myName = prompt('Please enter your name.');
// //  	localStrorage.setItem('name', myName);
// //  	myHeading.textContent = 'Mozilla is cool, ' + myName;
// //  }
 
//  function setUserName() {
//   var myName = prompt('Please enter your name.');
//   localStorage.setItem('name', myName);
//   myHeading.innerHTML = 'Mozilla is cool, ' + myName;
// }

//    if(!localStrorage.getItem('name')){
// 	setUserName();
//    } else {
// 	var storedName = localStrorage.getItem('name');
//   // 
//   myHeading.innerHTML = 'Mozilla is cool, ' + myName;
// }

// myButton.onclick = function() {
//  setUserName();
// }

// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}