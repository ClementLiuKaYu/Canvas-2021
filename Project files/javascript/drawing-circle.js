class DrawingCircle extends PaintFunction {
    constructor(contextReal,contextDraft) {
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
        this.contextDraft.arc(
        (this.origX + coord[0])/2,
        (this.origY + coord[1])/2,
        Math.sqrt(Math.pow(this.origX-coord[0],2)+Math.pow(this.origY-coord[1],2))/2,
        0,
        2 * Math.PI
        );
        $('input[id="fill-check"]')[0].checked ? this.contextDraft.fill() : this.contextDraft.stroke()
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
        this.contextReal.arc(
        (this.origX + coord[0])/2,
        (this.origY + coord[1])/2,
        Math.sqrt(Math.pow(this.origX-coord[0],2)+Math.pow(this.origY-coord[1],2))/2,
        0,
        2 * Math.PI
        );
        $('input[id="fill-check"]')[0].checked ? this.contextReal.fill() : this.contextReal.stroke()
    }

    onMouseLeave() {}
    onMouseEnter() {}

}