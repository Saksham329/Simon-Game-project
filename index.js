var buttonColors = ["red", "blue", "green", "yellow"]

var gamepattern = []

var userClickedPattern = [];

$(".btn").click(function(){
  var userchosencolor = $(this).attr("id");
  userClickedPattern.push(userchosencolor);

  playsound(userchosencolor)
  animation(userchosencolor)
})



function nextSequence() {
    var randomNumber = Math.round(Math.random()*3)
    var randomChoosenColor = buttonColors[randomNumber];
    gamepattern.push(randomChoosenColor);

    $("#" + randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

   playsound(randomChoosenColor)
    
}

function playsound(name){
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}
function animation(currentcolor){
  $("#"+ currentcolor).addClass("pressed");
  setTimeout(function(){$("#"+currentcolor).removeClass("pressed")}, 100);
}
nextSequence()