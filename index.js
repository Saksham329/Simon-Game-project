let colors = ["green","red","yellow","blue"]
let gamepattern = [];
let userclickedpattern = []
let level = 0 ; 
let started = false;

/* function to get keypress and to start the simon game */
$(document).on("keydown",function(){
    if (!started){
        $("#level-title").text("level "+ level)
        colorsequence()
        started = true
        }
})
/* function that will be applied on clicking the buttons */
$(".btn").on("click",function(){ let userchosencolor = $(this).attr("id")
userclickedpattern.push(userchosencolor)
playsound(userchosencolor)
animatepress(userchosencolor)
checkanswer(userclickedpattern.length-1)}
   )

   /* main function*/ 
function colorsequence(){
    level++
    userclickedpattern = []
    $("#level-title").text("level "+ level)
    let randomnumber = Math.floor(Math.random()*4)
    let randomchosencolor = colors[randomnumber];
    gamepattern.push(randomchosencolor)

    $("."+randomchosencolor).fadeToggle(100).fadeIn(100)
    playsound(randomchosencolor)
    animatepress(randomchosencolor)

}
/* if else statement to check game pattern with user changed pattern*/
function checkanswer(currentlevel){
    if(userclickedpattern[currentlevel] === gamepattern[currentlevel])
    {console.log("success");
    if(userclickedpattern.length === gamepattern.length){
        setTimeout(function(){colorsequence()},1000)
    }
}
    else{console.log("wrong")
    playsound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){$("body").removeClass("game-over")},200)
    $("#level-title").text("Game Over, Press Any Key to Restart")

    startover()
}
}

function startover(){
    level = 0;
    gamepattern = []
    started = false
}

/* function that will be used to play sound*/

function playsound(name){
    let audio1 = new Audio("sounds/"+ name +".mp3")
    audio1.play()
}

/* function to add animation to the button */
function animatepress(currentcolor){
    $("." + currentcolor).addClass("pressed")
    setTimeout(function() {$("." + currentcolor).removeClass("pressed")},100)

}
colorsequence()
