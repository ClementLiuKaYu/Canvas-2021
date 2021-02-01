function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
var isDrawing, points = [ ];
  
class DrawingTest extends PaintFunction {
    constructor(contextReal,contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.contextReal.lineJoin = this.contextReal.lineCap = 'round';
    }

    onMouseDown(points,event) {
        isDrawing = true;
        points.push({ 
            x: event.clientX, 
            y: event.clientY,
            width: getRandomInt(3, 5)
        });
    }
  
    onMouseMove(points,event) {
        if (!isDrawing) return;
        this.contextDraft.clearRect(
            0,
            0,
            canvasDraft.width,
            canvasDraft.height
        );
        points.push({ 
        x: event.clientX, 
        y: event.clientY,
        width: getRandomInt(3, 5)
        });
        for (var i = 1; i < points.length; i++) {
            this.contextReal.beginPath();
            this.contextReal.moveTo(points[i-1].x, points[i-1].y);
            this.contextReal.lineWidth = points[i].width;

            this.contextReal.lineTo(points[i].x, points[i].y);
            this.contextReal.stroke();
        }
    }
  
    onMouseUp() {
      isDrawing = false;
      points.length = 0;
    }
}