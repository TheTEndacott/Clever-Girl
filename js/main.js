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

  // var imgsArray = ["raptor", "jeff"];
  //
  // function generateRandomForArray() {
  //     var num = Math.floor(Math.random() * 8);
  //     return num;
  // }
  //
  // function generateRandom() {
  //     var num = Math.floor(Math.random() * 400);
  //     return num;
  // }
  //
  // function showLetter() {
  //     var letter = imgsArray[generateRandomForArray()];
  //     $("div").append("<img src='imgs/" + letter + ".png'>");
  //     var left = generateRandom();
  //     var top = generateRandom();
  //     $("div").last().css({"top": top + "px", "left": left + "px"});
  // }











});