$(function() {


  console.log("Hello Jurassic World!");

  var playerScore = 0;
  var timeLeft = 30; // -------------------------------------------------------- Set to 30 -------------------------------------------------
  var imageArray = ["dino1"];
  var modal = $("#myModal")[0];

  // Countdown Timer ----------
  setTimeout(function() {
    setInterval(countdown, 1000);
  }, 1000);

  function countdown() {
    if (timeLeft == 0) {
      $(".time").html("TIME'S UP!");
      stopEnemyRemove();
      stopSpawnChar();
      timeLeft = null;
      $(".modal-score").append(playerScore-1);
      $(modal).css("display", "block");
    } else {
      $(".timeCounter").html(timeLeft);
      timeLeft--;
      console.log(timeLeft);
    }
  };

  // Random images to appear ----------
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

  var char = imageArray[randomImage()];

  function spawnChar() {
      $(".random-image").append("<img src='images/" + char + ".png'>");
      var left = randomLeft();
      var top = randomTop();
      $(".random-image").last().css({"position":"absolute","top": top + "px", "left": left + "px"});
      console.log("sprite");
  }


  // var + function + clearInterval to remove the enemy and function to call when timer expires
  var enemyRemoveInterval = setInterval(stopChar, 1000);

  function stopChar() {
    $(".random-image img:last-child").remove();
  }

  function stopEnemyRemove() {
    clearInterval(enemyRemoveInterval);
    $(".random-image img:last-child").remove();
  }


  // Delay function + clearInterval for spawnChar ----------
  var spawnCharinterval = setInterval(spawnChar, 2000); // Enemy displayed for 2s but cleared by timeout after 1s

  function stopSpawnChar() {
    clearInterval(spawnCharinterval);
  }

  // Click event for enemy and update score counter ----------
  $(".random-image").click(function(){
    newScore = playerScore++;
    $(".scoreCounter").html(newScore);
    console.log("SCORE");
  });




















}); //Close for document load