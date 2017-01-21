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

// drawLeftArrow();
drawRightArrow();