// Dectecting button press
var numberOfSongButton = document.querySelectorAll('.song').length;
for(i=0; i<numberOfSongButton; i++){
    document.querySelectorAll('.song')[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML)
    })
}


// dectecting keyboard press
document.addEventListener("keypress", function(event){
    makeSound(event.key)
});
function makeSound(key){
    switch (key) {
        case "a":
            var audio = new Audio("sound/Adhan.mp3");
             audio.play();
            break;
        case "b":
            var audio = new Audio("sound/Adhan (1).mp3");
             audio.play();
            break;
        case "c":
            var audio = new Audio("sound/Adhan (2).mp3");
             audio.play();
            break;
        case "d":
            var audio = new Audio("sound/Adhan (3).mp3");
             audio.play();
            break;
        case "e":
            var audio = new Audio("sound/Adhan (4).mp3");
             audio.play();
            break;
        case "f":
            var audio = new Audio("sound/Adhan (6).mp3");
             audio.play();
            break;
        case "g":
            var audio = new Audio("sound/Adhan (7).mp3");
             audio.play();
            break;
        case "h":
            var audio = new Audio("sound/Adhan (8).mp3");
             audio.play();
            break;
        
        default: console.log(buttonInnerHTML);
    }
}
// var audio = new Audio("sound/Joeboy_-_Alcohol.mp3");
//         audio.play();