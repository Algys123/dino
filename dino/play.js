const dino = document.getElementById("dino");
const cake = document.getElementById("cake");

let Jump = new Audio();

Jump.src = "audio/Jump.mp3";

document.addEventListener("keydown", function(event){
    jump();
});

function jump() {
    if (dino.classList !="jump"){
    dino.classList.add("jump")
    Jump.play();
    }
    setTimeout(function(){
        dino.classList.remove("jump");
    }, 400);
   }

let isAlive = setInterval(function(){    
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cakeLeft = parseInt(window.getComputedStyle(cake).getPropertyValue("left"));
    
    if(cakeLeft < 71 && cakeLeft > 0 && dinoTop >= 375){
        alert("Game Over!")
    }
}, 10)

document.addEventListener("keydown", function(event){
    jump();
});