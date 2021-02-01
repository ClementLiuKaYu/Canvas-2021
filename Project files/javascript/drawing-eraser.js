class Erase extends PaintFunction {
    constructor(contextReal) {
      super();
      this.context = contextReal;
    }
  
    onMouseDown(coord, event) {
      this.context.strokeStyle = //background color
      this.context.lineJoin = "round";
      this.context.lineCap = "round";
      this.context.lineWidth = // how big the line is 
      this.context.beginPath();
      this.context.moveTo(coord[0], coord[1]);
      this.draw(coord[0], coord[1]);
      cPush();
    }
    onDragging(coord, event) {
      this.draw(coord[0], coord[1]);
    }
  
    onMouseMove() { }
    onMouseUp() { }
    onMouseLeave() { }
    onMouseEnter() { }
  
    draw(x, y) {
      this.context.lineTo(x, y);
      this.context.moveTo(x, y);
      this.context.closePath();
      this.context.stroke();
    }
  }