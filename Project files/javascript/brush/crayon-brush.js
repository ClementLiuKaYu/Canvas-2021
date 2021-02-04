var isDrawing, lastPoint;

class CrayonBrush extends PaintFunction {
    constructor(contextReal,contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.contextReal.lineWidth = $('input[id="line-size"]').val();
        this.contextReal.lineJoin = this.contextReal.lineCap = 'butt';
    }

    onMouseDown(lastPoint,event) {
        isDrawing = true;
        lastPoint = { x: event.clientX, y: event.clientY };
        console.log(lastPoint)
    }

    onMouseMove(lastPoint,event) {
        if (!isDrawing) return;

        this.contextReal.beginPath();
        this.contextReal.moveTo(lastPoint.x, lastPoint.y);
        this.contextReal.lineTo(lastPoint[0], lastPoint[1]);
        this.contextReal.stroke();

        this.contextReal.moveTo(lastPoint.x - 5, lastPoint.y - 5);
        this.contextReal.lineTo(lastPoint[0] - 5, lastPoint[1] - 5);
        this.contextReal.stroke();

        lastPoint = { x: event.clientX, y: event.clientY };
    }

    onMouseUp() {
        isDrawing = false;
    }
}