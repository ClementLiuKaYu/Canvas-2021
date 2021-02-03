var isDrawing, lastPoint = [];
  
class PenBrush extends PaintFunction {
    constructor(contextReal,contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.contextReal.lineJoin = this.contextReal.lineCap = 'round';
    }

    onMouseDown(lastPoint,event) {
        isDrawing = true;
        lastPoint = { x: event.clientX, y: event.clientY };
    }

    onMouseMove(lastPoint,event) {
        if (!isDrawing) return;

        this.contextReal.beginPath();
        this.contextReal.moveTo(lastPoint.x, lastPoint.y);
        this.contextReal.lineTo(lastPoint[0], lastPoint[1]);
        this.contextReal.stroke();
        
        lastPoint = { x: event.clientX, y: event.clientY };
    }

    onMouseUp() {
        isDrawing = false;
    }

}