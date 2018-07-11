$(function() {

  var playerScore = 0;
  var timeLeft = 10;
  var imageArray = ["dino1", "human1"];
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
      // stopEnemyRemove();
      return stopSpawnChar();
      return spawnChar();
    } else {
      $(".timeCounter").html(timeLeft);
      timeLeft--;
    }
  };


  // Random images to appear ----------
  function randomImage() {
      var num = Math.floor(Math.random() * 2); // Change final value according to images in imageArray
      return num;
  }

  var divsize = ((Math.random()*100) + 50).toFixed();

  function randomLeft() {
      var num = Math.floor(Math.random() * ($(document).width() - divsize)).toFixed();
      return num;
  }

  function randomTop() {
      var num = Math.floor(Math.random() * ($(document).height() - divsize)).toFixed();
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
  var spawnCharInterval = setInterval(spawnChar, 1250); // Enemy displayed for number

  function stopSpawnChar() {
    clearInterval(spawnCharInterval);
  }


  // Click event for enemy and update score counter ----------
  // $("#random-image").click(function(){
  //   newScore = playerScore++;
  //   $(".scoreCounter").html(newScore);
  // });

  $("#random-image").click(function(){
    if (char == "human1") {
      newScore = --playerScore;
      $(".scoreCounter").html(newScore);
      console.log("HUMAN LOSE POINT");
    } else if (char == "dino1") {
      newScore = ++playerScore;
      $(".scoreCounter").html(newScore);
      console.log("DINO WIN POINT");
    }
  });


  



















}); //Close for document load