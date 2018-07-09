$(function() {
  console.log("Hello world!");

  var timeleft = 30;
  var downloadTimer = setInterval(function(){
  timeleft--;
  document.getElementsByClass("time").textContent = "Time: " + timeleft;
  if(timeleft <= 0)
      clearInterval(downloadTimer);
  },1000);















});