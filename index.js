/// loop for enabling this for all buttons with class drum in the html file
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    ///adding event listerner for click 
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        
        var buttonInnerHTML = this.innerHTML;
        checkLetter(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
    });

}

///adding event listerner for keyboard button press
document.addEventListener("keydown", function(event){
    
    checkLetter(event.key);
    buttonAnimation(event.key);

});

// function for playing specific audio
function playAudio(link){
    var audio = new Audio(link);
    audio.play();
}


// switchcase for checking which button is clicked/pressed on keyboard
function checkLetter(letter){

    switch (letter) {
        case "w":
            playAudio("./sounds/tom-1.mp3");
        break;

        case "a":
            playAudio("./sounds/tom-4.mp3");
        break;

        case "s":
            playAudio("./sounds/snare.mp3");
        break;

        case "d":
            playAudio("./sounds/kick-bass.mp3");
        break;

        case "j":
            playAudio("./sounds/tom-3.mp3");
        break;

        case "k":
            playAudio("./sounds/tom-2.mp3");
        break;

        case "l":
            playAudio("./sounds/crash.mp3");
        break;

        /// default for random button presses or clickes outside the assinged one
        default: console.log(buttonInnerHTML);

    }

}

function buttonAnimation(currentKey){

    /// adding class pressed to current pressed button
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed".split(" ")); /// split makes the elements in array distinguished, so pressed is a unique class

    /// adding a delay of 0.1s before removing the pressed class
    setTimeout( function(){
        activeButton.classList.remove("pressed");
    }, 100)
}
