class DrawingStraightLine extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
    }
  
    onMouseDown(coord, event) {
      this.origX = coord[0];
      this.origY = coord[1];
      this.contextDraft.strokeStyle = lineColor;
      this.contextReal.strokeStyle = lineColor;
      this.contextDraft.fillStyle = fillColor;
      this.contextReal.fillStyle = fillColor;
      this.contextDraft.lineWidth = $('input[id="line-size"]').val();
      this.contextReal.lineWidth = $('input[id="line-size"]').val();
    }
  
    onDragging(coord, event) {
      this.contextDraft.clearRect(
        0,
        0,
        canvasDraft.width,
        canvasDraft.height
      );
      this.contextDraft.beginPath()
      this.contextDraft.moveTo(this.origX,this.origY)
      this.contextDraft.lineTo(coord[0],coord[1])
      this.contextDraft.stroke()
    }
  
    onMouseMove() {}
  
    onMouseUp(coord) {
      this.contextDraft.clearRect(
        0,
        0,
        canvasDraft.width,
        canvasDraft.height
      );
      this.contextReal.beginPath()
      this.contextReal.moveTo(this.origX,this.origY)
      this.contextReal.lineTo(coord[0],coord[1])
      this.contextReal.stroke()
      addSnapshot();
    }
    onMouseLeave() {}
    onMouseEnter() {}
  }