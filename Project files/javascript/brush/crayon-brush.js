var isDrawing, lastPoint;

class CrayonBrush extends PaintFunction {
    constructor(contextReal,contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.contextReal.lineWidth = 15;
        this.contextReal.lineJoin = this.contextReal.lineCap = 'butt';
    }

    onMouseDown(lastPoint,event) {
        isDrawing = true;
        lastPoint = { x: event.clientX, y: event.clientY };
    }

    onMouseMove(lastPoint,event) {
        if (!isDrawing) return;

        this.contextReal.beginPath();
        this.contextReal.moveTo(lastPoint.x, lastPoint.y);
        this.contextReal.lineTo(event.clientX, event.clientY);
        this.contextReal.stroke();

        this.contextReal.moveTo(lastPoint.x - 5, lastPoint.y - 5);
        this.contextReal.lineTo(event.clientX - 5, event.clientY - 5);
        this.contextReal.stroke();

        lastPoint = { x: event.clientX, y: event.clientY };
    }

    onMouseUp() {
        isDrawing = false;
    }
}