let character = document.getElementById("character");
let rock = document.getElementById("rock");
let button = document.getElementById("btn");

function jump() {
    if(character.classList !== "animation") {
        character.classList.add("animation");
    }
    setTimeout(function(){
        character.classList.remove("animation");
    }, 1400);
}

function restart() {
    location.reload();
}

let collision = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue("left"));

    if (rockLeft < 560 && rockLeft > 500 && dinoTop >= 220 ) {
        rock.style.animation = "none";
        rock.style.display = "none";
        button.style.display = "inline";
        alert("You lost");
    }
}, 10);