$(function() {
  console.log("Hello world!");

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













});