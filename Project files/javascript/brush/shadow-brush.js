var isDrawing, lastPoint = [];


class ShadowBrush extends PaintFunction {
  constructor(contextReal,contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.contextReal.lineWidth = 15;
    this.contextReal.lineJoin = contextReal.lineCap = 'round';
    this.contextReal.shadowBlur = 10;
    this.contextReal.shadowColor = 'rgb(0, 0, 0)';
  }

  onMouseDown(lastPoint, event) {
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
    points.length = 0;
  }
}