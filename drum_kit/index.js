var no_of_buttons = document.querySelectorAll(".drum").length;
for (var i = 0; i < no_of_buttons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function ()
    {
        var button_inner = this.innerHTML;
        playSound(button_inner);
        buttonEffect(button_inner);
        
    });
}

document.addEventListener("keydown", function(event) {

    playSound(event.key);
  
    buttonEffect(event.key);
  
});
  
function playSound(key)
{
   
    switch (key)
    {
        case "1":
            var s1 = new Audio("sounds/tom-1.mp3");
            s1.play();
            break;

        case "2":
            var s2 = new Audio("sounds/tom-2.mp3");
            s2.play();
            break;

        case "3":
            var s3 = new Audio('sounds/tom-3.mp3');
            s3.play();
            break;

        case "4":
            var s4 = new Audio('sounds/tom-4.mp3');
            s4.play();
            break;

        case "5":
            var s5 = new Audio('sounds/snare.mp3');
            s5.play();
            break;

        case "6":
            var s6 = new Audio('sounds/crash.mp3');
            s6.play();
            break;

        case "7":
            var s7 = new Audio('sounds/kick-bass.mp3');
            s7.play();
            break;


        default: console.log(key);

    }
}

function buttonEffect(currentButton)
{

    var activeButton = document.querySelector("._" + currentButton);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
    
    
}