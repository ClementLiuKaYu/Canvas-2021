var mouseX = 0;
var mouseY = 0;
var startingX = 0;

var recentWords = [];

var undoList = [];

function saveState() {
  undoList.push(canvasDraft.toDataURL());
}
saveState();

function undo() {
  undoList.pop();

  var imgData = undoList[undoList.length - 1];
  var image = new Image();

  image.src = imgData;
  image.onload = function () {
    contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height)
    contextDraft.drawImage(image, 0, 0, canvasDraft.width, canvasDraft.height, 0, 0,canvasDraft.width, canvasDraft.height)
  }
}
canvasDraft.addEventListener("click", function (e){
  mouseX = e.pageX - canvasDraft.offsetLeft;
  mouseY = e.pageY - canvasDraft.offsetTop;
  startingX = mouseX;
  
  recentWords = [];
  return false
}, false);

document.addEventListener("keydown", function (e){
  contextDraft.font = "20px Arial"

  if (e.key === "Backspace") {
    undo();

    var recentWord = recentWords[recentWords.length - 1];

    mouseX -= contextDraft.measureText(recentWord).width;
    recentWords.pop();
  } else if (e.key === "Enter") {
    mouseX = startingX;
    mouseY += 20;
  }else {
    contextDraft.fillText(e.key, mouseX, mouseY);

    mouseX += contextDraft.measureText(e.key).width;

    saveState()
    recentWords.push(e.key)
  }
})