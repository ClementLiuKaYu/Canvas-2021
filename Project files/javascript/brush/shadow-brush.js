var isDrawing, lastPoint = [];


class ShadowBrush extends PaintFunction {
  constructor(contextReal,contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.contextReal.lineWidth = $('input[id="line-size"]').val();
    this.contextReal.lineJoin = contextReal.lineCap = 'round';
;
  }

  onMouseDown(lastPoint, event) {
    this.contextReal.strokeStyle = lineColor;
    this.contextReal.shadowBlur = 10;
    this.contextReal.shadowColor = lineColor
    isDrawing = true;
    lastPoint = { x: event.clientX, y: event.clientY };
  }

  onMouseMove(lastPoint, event) {
    if (!isDrawing) return;
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    )
    this.contextReal.beginPath();
    this.contextReal.moveTo(lastPoint.x, lastPoint.y);
    this.contextReal.lineTo(lastPoint[0], lastPoint[1]);
    this.contextReal.stroke();
    
    lastPoint = { x: event.clientX, y: event.clientY };
  }

  onMouseUp() {
    isDrawing = false;
    lastPoint.length = 0;
    this.contextReal.shadowBlur = 0;
  }
}