var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var randomChosenColor;
var randomNum;
var userChosenColor;
var level = 0;
var startToggle;

startToggle = false;
$(document).keydown(function ()
{
    if (!startToggle)
    {
        $("#level-title").text("LEVEL " + level);
        nextSequence();
        startToggle = true;
    }
});

$(".btn").click(function ()
{
    userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    // console.log(userClickedPattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
})


function nextSequence()
{
    userClickedPattern = [];
    level++;
    $("#level-title").text("LEVEL " + level);
    randomNum = Math.floor(Math.random() * 4);
    randomChosenColor = buttonColors[randomNum];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

function playSound(name)
{
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor)
{
    $("#" + currentColor).addClass("pressed");
    setTimeout(function ()
    {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel)
{

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel])
    {

        if (userClickedPattern.length === gamePattern.length)
        {
            setTimeout(function ()
            {
                nextSequence();
            }, 1000);
            // console.log("SUCCESS");
        }
        // console.log("SUCCESS");
    }
    else
    {
        playSound("wrong"); //playSound(wrong); - mistake 
        $("body").addClass("game-over");
        setTimeout(function ()
        {
            $("body").removeClass("game-over");
        }, 600);
        $("#level-title").text("GAME OVER, Press any key to Restart");
        //  console.log("WRONG");
        startOver();
    }
}

function startOver()
{
    level = 0;
    gamePattern = [];
    startToggle = false;
}