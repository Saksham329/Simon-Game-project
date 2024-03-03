var buttonColors = ["red", "blue", "green", "yellow"]

var gamepattern = []

function nextSequence() {
    var randomNumber = Math.round(Math.random()*3)
    var randomChoosenColor = buttonColors[randomNumber];
    gamepattern.push(randomChoosenColor);

    $("#" + randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/"+randomChoosenColor+".mp3");
    audio.play();
}

$(document).on("keydown", function(event){

    if(event.key)
        
  
    {
  
      nextSequence();
  
    }
   
  
  });

  