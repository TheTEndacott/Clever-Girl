$(function() {

  console.log("Hello Jurassic World!");

  var playerScore = 0;
  var timeLeft = 6; // -------------------------------------------------------- Set to 30 -------------------------------------------------

  // Countdown Timer ----------
  setTimeout(function() {
    setInterval(countdown, 1000);
  }, 1000);

  function countdown() {
    if (timeLeft == 0) {
      $(".time").html("TIME'S UP!");
      clearInterval(showChar());
      clearInterval(intervalChar);
      clearInterval(stopChar());
      
    } else {
      $(".timeCounter").html(timeLeft);
      timeLeft--;
      console.log(timeLeft);
    }
  };

  // Stop game running when timer runs out ----------
  function stopChar() {
    $(".random-image img:last-child").remove(); // Can be replace stopchar in enemyRemove
  }

  // Random images to appear ----------
  var imageArray = ["dino1"];

  function randomImage() {
      var num = Math.floor(Math.random() * 1);
      return num;
  }

  function randomLeft() {
      var num = Math.floor(Math.random() * 1250);
      return num;
  }

  function randomTop() {
      var num = Math.floor(Math.random() * 640);
      return num;
  }

  function showChar() {
      var char = imageArray[randomImage()];
      $(".random-image").append("<img src='images/" + char + ".png'>");
      var left = randomLeft();
      var top = randomTop();
      $(".random-image").last().css({"position":"absolute","top": top + "px", "left": left + "px"});
      console.log("Raptor");

      var enemyRemove = setTimeout(function(){
        stopChar();
      }, 1000); // Enemy removed after 1s
  }

  // Delay function for showChar ----------
  var intervalChar = setInterval(showChar, 2000); // Enemy displayed for 2s but cleared by timeout after 1s

  // Click event for enemy and update score counter ----------
  $(".random-image").click(function(){
    newScore = playerScore++;
    $(".scoreCounter").html(newScore);
    console.log("SCORE");
  });


















}); //Close for document load