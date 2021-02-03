var isDrawing, lastPoint;
var density = 50;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class SprayBrush extends PaintFunction {
  // This class extends the PaintFunction class
  // You are only passing one instance here

    constructor(contextReal,contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.contextReal.lineJoin = this.contextReal.lineCap = 'round';
        this.contextReal.lineWidth = 5;
    }

    onMouseDown(lastPoint, event) {
        isDrawing = true;
        lastPoint = { x: event.clientX, y: event.clientY };
        this.contextReal.fillStyle = lineColor;
    }

    onDragging(lastPoint, event) {
        if (isDrawing) {
            this.contextReal.moveTo(lastPoint.x, lastPoint.y);
            for (var i = density; i--; ) {
                var radius = 20;
                var offsetX = getRandomInt(-radius, radius);
                var offsetY = getRandomInt(-radius, radius);
                this.contextReal.fillRect(lastPoint[0] + offsetX, lastPoint[1] + offsetY, 1, 1);
            }
        }
    }

    onMouseMove() {}

    onMouseUp() {
        isDrawing = false;
    }

    onMouseLeave() {}
    onMouseEnter() {}
}