let lastPointGap = 5;

class DrawingIrrPolygon extends PaintFunction {
  constructor(contextReal,contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.start = false;
    this.coords = [];
  }

onMouseDown(coord, event){
  if(this.start === false) {
    this.contextDraft.strokeStyle = lineColor;
    this.contextReal.strokeStyle = lineColor;
    this.contextDraft.fillStyle = fillColor;
    this.contextReal.fillStyle = fillColor;
    this.contextDraft.lineWidth = $('input[id="line-size"]').val();
    this.contextReal.lineWidth = $('input[id="line-size"]').val();
      this.origX = coord[0];
      this.origY = coord[1];
      this.start = true
  }else if(Math.abs(coord[0] - this.origX) <  lastPointGap && Math.abs(coord[1] - this.origY) < lastPointGap && this.start == true) {
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );

    this.contextReal.beginPath()
    this.contextReal.moveTo(this.origX, this.origY);
    for(let i = 0; i < this.coords.length; i++){
      this.contextReal.lineTo(this.coords[i][0], this.coords[i][1]);
    }
    this.contextReal.closePath();
    $('input[id="fill-check"]')[0].checked ? this.contextReal.fill() : this.contextReal.stroke()
    this.start = false;
    this.coords = [];
    addSnapshot();
  }else{
    this.coords.push([coord[0],coord[1]])
  }
}

onDragging(coord, event) {

}

onMouseMove(coord, event){
  if (this.start === true){
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );
    this.contextDraft.beginPath()
    this.contextDraft.moveTo(this.origX,this.origY)
    for (let i=0; i < this.coords.length; i++){
      this.contextDraft.lineTo(this.coords[i][0],this.coords[i][1])
    }
    this.contextDraft.lineTo(coord[0],coord[1])
    this.contextDraft.closePath()
    $('input[id="fill-check"]')[0].checked ? this.contextDraft.fill() : this.contextDraft.stroke()
  }
}

onMouseUp(coord, event) {    

}

onMouseLeave(){}
onMouseEnter(){}

}
