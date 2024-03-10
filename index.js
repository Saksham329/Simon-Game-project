let colors = ["green","red","yellow","blue"]
let gamepattern = [];
let userclickedpattern = []
let level = 

$(".btn").on("click",function(){
    let userchosencolor = $(this).attr("id")
    userclickedpattern.push(userchosencolor)
    playsound(userchosencolor)
    animatepress(userchosencolor)
})
``
$(document).on("keydown",function(){colorsequence()})

function colorsequence(){
    let randomnumber = Math.floor(Math.random()*4)
    let randomchosencolor = colors[randomnumber];
    gamepattern.push(randomchosencolor)

    $("."+randomchosencolor).fadeToggle(100).fadeIn(100)
    playsound(randomchosencolor)
    animatepress(randomchosencolor)

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


