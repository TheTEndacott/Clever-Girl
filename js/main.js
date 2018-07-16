$(function() {

  var playerScore = 0;
  var timeLeft = 30;
  var imageArray = ["dino1", "dino1", "human1", "human2"];
  var finishHighAudio = new Audio("audio/there.mp3");
  var finishLowAudio = new Audio("audio/chaos.mp3");
  var middleAudio = new Audio("audio/clever.mp3");


  // Countdown Timer ----------
  setTimeout(function() {
    setInterval(countdown, 1000);
  }, 1000);

  function countdown() {
    if (timeLeft == 0) {
        if (playerScore > 15) {
          $(".time").html("TIME'S UP!");
          $(".modal-score").append(playerScore);
          $("#myModal").css("display", "block");
          finishHighAudio.play();
          timeLeft = null;
          return stopSpawnChar();
          return spawnChar();
          return shootNormal();
        } else {
          $(".time").html("TIME'S UP!");
          $(".modal-score").append(playerScore);
          $("#myModal").css("display", "block");
          finishLowAudio.play();
          timeLeft = null;
          return stopSpawnChar();
          return spawnChar();
          return shootNormal();
        }
    } else {
      $(".timeCounter").html(timeLeft);
      timeLeft--;
    }
  };


  // Random images to appear ----------
  function randomImage() {
      var num = Math.floor(Math.random() * 4); // Change final value according to images in imageArray
      return num;
  }

  var buffer = ((Math.random()*100) + 50);

  function randomLeft() {
      var num = Math.floor(Math.random() * ($("#game-area").width() - buffer));
      return num;
  }

  function randomTop() {
      var num = Math.floor(Math.random() * ($("#game-area").height() - buffer));
      return num;
  }

  function spawnChar() {
    $("#random-image img").remove();

    char = imageArray[randomImage()];
    $("#random-image").append("<img src='images/" + char + ".png'>");
    var left = randomLeft();
    var top = randomTop();
    $("#random-image").last().css({"position":"absolute","top": top + "px", "left": left + "px"});
  }


  // Delay function + clearInterval for spawnChar ----------
  var spawnCharInterval = setInterval(spawnChar, 2000); // Enemy displayed for number

  function stopSpawnChar() {
    clearInterval(spawnCharInterval);
  }


  // Ground boss dinosaur to appear at set time into game and remove after 1sec ----------
  var spawnBossGInterval = setTimeout(spawnBossG, 15000); // Enemy spawns after number in secs

  function spawnBossG() {
    $("#bossG").append("<img src='images/dino9.png'>");
    var left = randomLeft();
    var top = randomTop();
    $("#bossG").last().css({"position":"absolute","top": top + "px", "left": left + "px"});
  }

  var removeBossG = setTimeout(stopSpawnBossG, 16000); // Enemy removed after number in secs

  function stopSpawnBossG() {
    $("#bossG img").remove();
  }


  // Flying boss dinosaur to appear at set time into game on left of screen and remove after reaching right ----------
  var spawnBossFInterval = setTimeout(spawnBossF, 20000); // Enemy spawns after number in secs

  function spawnBossF() {
    $("#bossF").append("<img src='images/dino8.png'>");
    $("#bossF").animate({marginLeft: "1475px"}, 5000, function(){ // Animation (spawn) lasts for number
      $("#bossF img").remove();
    });
  }


  // Click event for enemy and update score counter ----------
  $("#random-image").on("click", shootNormal);

  function shootNormal(){
    if (char == "human1" || char == "human2") {
      newScore = --playerScore;
      $(".scoreCounter").html(newScore);
    } else if (char == "dino1") {
      newScore = ++playerScore;
      $(".scoreCounter").html(newScore);
    }
  }

  // Click event for boss enemy and update score counter ----------
  $("#bossG").on("click", shootBossG);

  function shootBossG(){
    newScore = 5+playerScore;
    $(".scoreCounter").html(newScore);
  }


  $("#bossF").on("click", shootBossF);

  function shootBossF(){
    newScore = 10+playerScore;
    $(".scoreCounter").html(newScore);
  }

  setTimeout(function(){
    middleAudio.play();
  }, 28000);
















}); //Close for document load