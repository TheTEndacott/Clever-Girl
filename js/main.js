$(function() {

  var playerScore = 0;
  var timeLeft = 30;
  var imageArray = ["dino1", "dino1", "human1", "human2"];
  var modal = $("#myModal")[0];


  // Countdown Timer ----------
  setTimeout(function() {
    setInterval(countdown, 1000);
  }, 1000);

  function countdown() {
    if (timeLeft == 0) {
      $(".time").html("TIME'S UP!");
      $(".modal-score").append(playerScore);
      $(modal).css("display", "block");
      timeLeft = null;
      return stopSpawnChar();
      return spawnChar();
      return shootNormal();
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

  var divsize = ((Math.random()*100) + 50);

  function randomLeft() {
      var num = Math.floor(Math.random() * ($("#game-area").width() - divsize));
      return num;
  }

  function randomTop() {
      var num = Math.floor(Math.random() * ($("#game-area").height() - divsize));
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


  // Ground boss dinosaur to appear at set time into game and remove after 1sec ----------
  var spawnBossInterval = setTimeout(spawnBoss, 22000);

  function spawnBoss() {
    $("#boss").append("<img src='images/dino9.png'>");
    var left = randomLeft();
    var top = randomTop();
    $("#boss").last().css({"position":"absolute","top": top + "px", "left": left + "px"});
  }

  var removeBoss = setTimeout(stopSpawnBoss, 23000); // Enemy displayed for number

  function stopSpawnBoss() {
    $("#boss img").remove();
  }


  // Delay function + clearInterval for spawnChar ----------
  var spawnCharInterval = setInterval(spawnChar, 1250); // Enemy displayed for number

  function stopSpawnChar() {
    clearInterval(spawnCharInterval);
  }


  // Click event for enemy and update score counter ----------
  $("#random-image").on("click", shootNormal);

  function shootNormal(){
    if (char == "human1") {
      newScore = --playerScore;
      $(".scoreCounter").html(newScore);
      console.log("HUMAN LOSE POINT");
    } else if (char == "dino1") {
      newScore = ++playerScore;
      $(".scoreCounter").html(newScore);
      console.log("DINO WIN POINT");
    }
  }

  // Click event for boss enemy and update score counter ----------
  $("#boss").on("click", shootBossGround);

  function shootBossGround(){
    newScore = 5+playerScore;
    $(".scoreCounter").html(newScore);
    console.log("BOSS POINTS");
  }






















}); //Close for document load