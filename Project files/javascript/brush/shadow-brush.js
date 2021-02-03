var isDrawing, points = [ ];


class ShadowBrush extends PaintFunction {
  constructor(contextReal,contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.contextReal.lineWidth = 20;
    this.contextReal.lineJoin = contextReal.lineCap = 'round';
    this.contextReal.shadowBlur = 10;
    this.contextReal.shadowColor = 'rgb(0, 0, 0)';
  }

  onMouseDown(points, event) {
    isDrawing = true;
    points.push({ x: event.clientX, y: event.clientY });
  }

  onMouseMove(points, event) {
    if (!isDrawing) return;
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    )
    points.push({ x: event.clientX, y: event.clientY });
    
    this.contextReal.beginPath();
    this.contextReal.moveTo(points[0].x, points[0].y);

    for (var i = 1; i < points.length; i++) {
      this.contextReal.lineTo(points[i].x, points[i].y);
    }
    this.contextReal.stroke();
  }

  onMouseUp() {
    isDrawing = false;
    points.length = 0;
  }
}