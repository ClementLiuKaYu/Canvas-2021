class DrawingOval extends PaintFunction {
    // This class extends the PaintFunction class
    // You are only passing one instance here
  
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
        this.contextDraft.ellipse(
        this.origX,
        this.origY,
        Math.abs(coord[0]-this.origX),
        Math.abs(coord[1]-this.origY),
        0,
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
        this.contextReal.ellipse(
        this.origX,
        this.origY,
        Math.abs(coord[0]-this.origX),
        Math.abs(coord[1]-this.origY),
        0,
        0,
        2 * Math.PI
        );
        this.contextReal.fill()
    }
  
    onMouseLeave() {}
    onMouseEnter() {}

}