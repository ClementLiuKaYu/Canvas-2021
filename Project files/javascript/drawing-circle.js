class DrawingCircle extends PaintFunction {
    constructor(contextReal,contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord, event) {
        this.contextDraft.fillStyle = "#f44";
        this.contextReal.fillStyle = "#f44";
        this.origX = coord[0];
        this.origY = coord[1];
    }
  
    onDragging(coord, event) {
        this.contextDraft.fillStyle = "#f44";
        this.contextReal.fillStyle = "#f44";
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
        this.contextDraft.fill()
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
        this.contextReal.fill()
    }

    onMouseLeave() {}
    onMouseEnter() {}

}