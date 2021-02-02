let lastPointGap = 5;

class DrawingIrrPolygon extends PaintFunction {
  constructor(contextReal,contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;           
    this.end = true;
    this.coords = [];
  }

  onMouseDown(coord, event){
    if(this.end == true) {
        this.coords = [];
        this.origX = this.nextX = coord[0];
        this.origY = this.nextY = coord[1];
    }
  }

  onDragging(coord, event) {
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );
    this.draw(
      this.nextX, 
      this.nextY, 
      coord[0], 
      coord[1], 
      this.contextDraft
    );
  }

  onMouseMove(){}
  
  onMouseUp(coord, event) {    
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );
    this.draw(
      this.nextX, 
      this.nextY, 
      coord[0], 
      coord[1], 
      this.contextReal
    );
    this.coords.push(coord);
    this.nextX = coord[0];
    this.nextY = coord[1]; 
    //check the gap between last point and start point
    if(Math.abs(this.nextX - this.origX) <  lastPointGap && Math.abs(this.nextY - this.origY) < lastPointGap && this.end == false) {
      //connect last point and start point
      let newPath = new Path2D();
      newPath.moveTo(this.origX, this.origY);
      for(let i = 0; i < this.coords.length; i++) {
        newPath.lineTo(this.coords[i][0], this.coords[i][1]);
      }
      newPath.closePath();
      this.contextReal.stroke(newPath);
      this.end = true;
      this.coords = [];
    } else {
      this.end = false;
    }
  }

  onMouseLeave(){}
  onMouseEnter(){}

  draw(x1, y1, x2, y2, context) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();    
  }
}
