var canvas = document.getElementById("canvas-real");
var context = canvas.getContext("2d");
context.beginPath();
context.rect(0, 0, 1280, 720);
context.fillStyle = "white";
context.fill();
context.lineWidth = "0";
context.strokeStyle = "";
context.stroke();
document.getElementById("clear").addEventListener(
  "click",
  function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
  },
  false
);
