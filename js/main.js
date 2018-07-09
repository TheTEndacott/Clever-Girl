$(function() {
  console.log("Hello world!");

  var imgRaptor = "../images/raptorfull-sm-l.png"
  var imgJeff = "../images/jeffgoldblum-sm.png"

  // Countdown Timer
  var timeLeft = 30;
  var timerId = setInterval(countdown, 1000);

  function countdown() {
    if (timeLeft == 0) {
      $(".time").html("TIME'S UP!")
    } else {
      $(".timeCounter").html(timeLeft);
      timeLeft--;
    }
  };

  // Random images to appear
  var imageArray = ["dino1", "dino1","dino1", "human1"];

  function generateRandomForArray() {
      var num = Math.floor(Math.random() * 4);
      return num;
  }

  function generateRandomLeft() {
      var num = Math.floor(Math.random() * 1336);
      return num;
  }

  function generateRandomTop() {
      var num = Math.floor(Math.random() * 675);
      return num;
  }

  function showChar() {
      var char = imageArray[generateRandomForArray()];
      $(".random-image").append("<img src='images/" + char + ".png'>");
      var left = generateRandomLeft();
      var top = generateRandomTop();
      $(".random-image").last().css({"position":"absolute","top": top + "px", "left": left + "px"});
  }

  showChar();










});