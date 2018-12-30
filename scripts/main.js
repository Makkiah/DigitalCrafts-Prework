



/*
function showUserName() {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome back, ' + storedName + '.'
  }
mySecondButton.onclick = function() {
    showUserName();
  }
  */





  // Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/makkiah.png') {
      myImage.setAttribute ('src','images/mac.png');
    } 
    else if (mySrc ===  'images/mac.png') {
      myImage.setAttribute ('src', 'images/ps4_gamers.png');
    }
    else if (mySrc === 'images/ps4_gamers.png') {
      myImage.setAttribute ('src', 'images/freeGamingDeals.png');
    }
    else {
      myImage.setAttribute ('src','images/makkiah.png');
    }
}
// Personalized welcome message code
var myButton = document.getElementById('button1');
// var mySecondButton = document.getElementById('button2'); 
var myHeading = document.getElementById('top');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome to my About Me, ' + myName + '!';
}
myButton.onclick = function() {
    setUserName();
}
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Welcome back, ' + storedName + '.';
}

