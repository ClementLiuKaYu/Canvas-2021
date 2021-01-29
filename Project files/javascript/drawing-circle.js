class DrawingCircle extends PaintFunction {
    // This class extends the PaintFunction class
    // You are only passing one instance here
  
    constructor(contextReal,contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }
  
  // 
    onMouseDown(coord, event) {
        this.contextDraft.fillStyle = "#f44";
        this.contextReal.fillStyle = "#f44";
        this.origX = coord[0];
        this.origY = coord[1];
    }
  
    onDragging(coord, event) {
        // Manipulating the context draft
        this.contextDraft.fillStyle = "#f44";
        this.contextReal.fillStyle = "#f44";
        // Allows you to actually draw out your squares
        this.contextDraft.clearRect(
        0,
        0,
        canvasDraft.width,
        canvasDraft.height
        );
    // Pass in the original x and y coordinates, followed by the new coordinates that we get for position x and y
        this.contextDraft.beginPath()
        this.contextDraft.arc(
            (this.origX + coord[0])/2,
            (this.origY + coord[1])/2,
            Math.sqrt((this.origX-coord[0])**2+(this.origY-coord[1])**2)/2,
            0,
            2 * Math.PI
        );
    this.contextDraft.fill()
    }
  
    onMouseMove() {}
  
    // Committing the element to the canvas
    onMouseUp(coord) {
        // Clearing the rectangle first
        this.contextDraft.clearRect(
        0,
        0,
        canvasDraft.width,
        canvasDraft.height
        );
        // Commit that drawing to context real
        // Without this commit, it won't actually draw
        this.contextReal.beginPath()
        this.contextReal.arc(
        (this.origX + coord[0])/2,
        (this.origY + coord[1])/2,
        Math.sqrt((this.origX-coord[0])**2+(this.origY-coord[1])**2)/2,
        0,
        2 * Math.PI
        );
        this.contextReal.fill()
    }
    onMouseLeave() {}
    onMouseEnter() {}
}