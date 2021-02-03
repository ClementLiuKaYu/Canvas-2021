function drawPixels(x, y) {
    for (var i = -10; i < 10; i+= 4) {
      for (var j = -10; j < 10; j+= 4) {
        if (Math.random() > 0.5) {
          contextReal.fillStyle = ['red', 'orange', 'yellow', 'green', 
                           'light-blue', 'blue', 'purple'][getRandomInt(0,6)];
          contextReal.fillRect(x+i, y+j, 4, 4);
        }
      }
    }
  }
  
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
var isDrawing, lastPoint;
  
class ColouredPixelsBrush extends PaintFunction {
    constructor(contextReal,contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
      this.contextReal.lineJoin = this.contextReal.lineCap = 'round';
    }
    onMouseDown(lastPoint, event) {
        isDrawing = true;
        lastPoint = { x: event.clientX, y: event.clientY };
    }
  
    onDragging(lastPoint, event) {
        if (!isDrawing) return;
        drawPixels(lastPoint[0], lastPoint[1]);
    }
  
    onMouseMove() {}
  
    onMouseUp() {
        isDrawing = false;
    }
  
    onMouseLeave() {}
    onMouseEnter() {} 
}
  