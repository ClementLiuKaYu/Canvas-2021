

class DrawingPolygon extends PaintFunction {
    constructor(contextReal,contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
      this.side = $("input[id=side]").val();
      this.angle = 2*Math.PI/this.side;
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
      this.radius = Math.sqrt(Math.pow(this.origX-coord[0],2)+Math.pow(this.origY-coord[1],2))
      this.currAngle = Math.atan((coord[1]-this.origY)/(coord[0]-this.origX))
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(coord[0],coord[1]);
      for (let i=1; i<=this.side; i++){
        if (coord[0] - this.origX >= 0){
          this.contextDraft.lineTo(
          this.origX+this.radius*Math.cos(i*this.angle+this.currAngle),
          this.origY+this.radius*Math.sin(i*this.angle+this.currAngle)
          );
        }else{
          this.contextDraft.lineTo(
          this.origX+this.radius*Math.cos(i*this.angle+this.currAngle+Math.PI),
          this.origY+this.radius*Math.sin(i*this.angle+this.currAngle+Math.PI)
          );
        }
      }
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
      this.radius = Math.sqrt(Math.pow(this.origX-coord[0],2)+Math.pow(this.origY-coord[1],2))
      this.currAngle = Math.atan((coord[1]-this.origY)/(coord[0]-this.origX))
      this.contextReal.beginPath();
      this.contextReal.moveTo(coord[0],coord[1]);
      for (let i=1; i<=this.side; i++){
        if (coord[0] - this.origX >= 0){
          this.contextReal.lineTo(
          this.origX+this.radius*Math.cos(i*this.angle+this.currAngle),
          this.origY+this.radius*Math.sin(i*this.angle+this.currAngle)
          );
        } else {
          this.contextReal.lineTo(
          this.origX+this.radius*Math.cos(i*this.angle+this.currAngle+Math.PI),
          this.origY+this.radius*Math.sin(i*this.angle+this.currAngle+Math.PI)
          );
        }
      }
      $('input[id="fill-check"]')[0].checked ? this.contextReal.fill() : this.contextReal.stroke()
    }

    onMouseLeave() {}
    onMouseEnter() {}
}