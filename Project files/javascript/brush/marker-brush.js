var isDrawing, lastPoint;

class MarkerBrush extends PaintFunction {
    constructor(contextReal,contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.contextReal.lineWidth = 3;
        this.contextReal.lineJoin = this.contextReal.lineCap = 'round';
    }
    onMouseDown(lastPoint, event) {
        isDrawing = true;
        lastPoint = { x: event.clientX, y: event.clientY };
    }

    onMouseMove(lastPoint,event) {
        if (!isDrawing) return;

        this.contextReal.beginPath();
        this.contextReal.globalAlpha = 1;

        this.contextReal.moveTo(lastPoint.x, lastPoint.y);
        this.contextReal.lineTo(event.clientX, event.clientY);
        this.contextReal.stroke();

        this.contextReal.moveTo(lastPoint.x - 4, lastPoint.y - 4);
        this.contextReal.lineTo(event.clientX - 4, event.clientY - 4);
        this.contextReal.stroke();

        this.contextReal.moveTo(lastPoint.x - 2, lastPoint.y - 2);
        this.contextReal.lineTo(event.clientX - 2, event.clientY - 2);
        this.contextReal.stroke();

        this.contextReal.moveTo(lastPoint.x + 2, lastPoint.y + 2);
        this.contextReal.lineTo(event.clientX + 2, event.clientY + 2);
        this.contextReal.stroke();
    
        this.contextReal.moveTo(lastPoint.x + 4, lastPoint.y + 4);
        this.contextReal.lineTo(event.clientX + 4, event.clientY + 4);
        this.contextReal.stroke();
      
        lastPoint = { x: event.clientX, y: event.clientY };
    }

    onMouseUp() {
        isDrawing = false;
    }
}