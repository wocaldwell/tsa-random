// Make some arrows
var canvas = document.getElementById("arrows");
var ctx = canvas.getContext("2d");


function drawLeftArrow() {
    ctx.fillStyle = "#D8C59F";
    ctx.beginPath();
    ctx.moveTo(200,300);
    ctx.lineTo(430,50);
    ctx.lineTo(430,550);
    ctx.fill();
    ctx.fillRect(430,225,300,150);
    ctx.fillRect(580,375,150,175);
}

function drawRightArrow() {
    ctx.fillStyle = "#D8C59F";
    ctx.beginPath();
    ctx.moveTo(630,300);
    ctx.lineTo(430,50);
    ctx.lineTo(430,550);
    ctx.fill();
    ctx.fillRect(130,225,300,150);
    ctx.fillRect(130,375,150,175);
}

// Select arrow at random
function pickArrowRandomly() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    randomNum = Math.random();
    console.log(randomNum);
    if (randomNum < .5) {
        drawLeftArrow();
    } else {
        drawRightArrow();
    }
}

// Click event listener for whole page
document.addEventListener("click", pickArrowRandomly);





