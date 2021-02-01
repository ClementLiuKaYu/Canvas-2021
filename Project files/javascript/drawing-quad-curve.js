class DrawingQuadCurve extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.firstLine = true // true -> waiting to draw first line | false -> first line has been drawn, waiting to click for quad-coord.
    this.start = false // true -> have not started drawing first line
  }

  onMouseDown(coord, event) {
    if (this.firstLine){
      this.contextReal.strokeStyle = "#444";
      this.origX = coord[0];
      this.origY = coord[1];
      this.start = true
    }
  }
  
  onDragging(coord, event) {
  
  }
  
  onMouseMove(coord) {
  this.contextDraft.clearRect(
    0,
    0,
    canvasDraft.width,
    canvasDraft.height
  );
  if (this.firstLine){
    if (this.start){
      this.contextDraft.beginPath()
      this.contextDraft.moveTo(this.origX,this.origY)
      this.contextDraft.lineTo(coord[0],coord[1])
      this.contextDraft.stroke()
    }
  }else{
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.origX,this.origY);
    this.contextDraft.quadraticCurveTo(coord[0],coord[1],this.finalX,this.finalY);
    this.contextDraft.stroke();
  }
  }
  
  onMouseUp(coord) {
    this.contextDraft.clearRect(
    0,
    0,
    canvasDraft.width,
    canvasDraft.height
  );
    if (this.firstLine){
        this.finalX = coord[0]
        this.finalY = coord[1]
        this.firstLine = false
    }else{
        this.firstLine = true
        this.start = false
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX,this.origY);
        this.contextReal.quadraticCurveTo(coord[0],coord[1],this.finalX,this.finalY);
        this.contextReal.stroke();
    }
  }
  onMouseLeave() {}
  onMouseEnter() {}
     
}