class DrawingBezierCurve extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
      this.firstLine = true // true -> waiting to draw first line | false -> first line has been drawn, waiting to click for quad-coord.
      this.bezierCount = 1
      this.start = false
    }
  
    onMouseDown(coord, event) {
      if (this.firstLine){
        this.contextDraft.strokeStyle = lineColor;
        this.contextReal.strokeStyle = lineColor;
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
    }else if (this.bezierCount === 1){
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.origX,this.origY);
      this.contextDraft.bezierCurveTo(coord[0],coord[1],coord[0],coord[1],this.finalX,this.finalY);
      this.contextDraft.stroke();
    }else{
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.origX,this.origY);
      this.contextDraft.bezierCurveTo(this.beizCoord[0],this.beizCoord[1],coord[0],coord[1],this.finalX,this.finalY);
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
        this.finalX = coord[0];
        this.finalY = coord[1];
        this.firstLine = false;
      }else if (this.bezierCount === 1){
        this.bezierCount = 2;
        this.beizCoord = [coord[0],coord[1]]
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX,this.origY);
        this.contextDraft.bezierCurveTo(coord[0],coord[1],coord[0],coord[1],this.finalX,this.finalY);
        this.contextDraft.stroke();
      }else{
        this.firstLine = true;
        this.start = false;
        this.bezierCount = 1;
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX,this.origY);
        this.contextReal.bezierCurveTo(this.beizCoord[0],this.beizCoord[1],coord[0],coord[1],this.finalX,this.finalY);
        this.contextReal.stroke();
      }
    }
    onMouseLeave() {}
    onMouseEnter() {}
       
  }