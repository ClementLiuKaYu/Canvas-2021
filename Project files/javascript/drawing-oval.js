class DrawingOval extends PaintFunction {
    // This class extends the PaintFunction class
    // You are only passing one instance here
  
    constructor(contextReal,contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.oval = false
        this.started = false
    }
  
    onMouseDown(coord, event) {
        if(this.oval === false){
            this.started = true
            this.origX = coord[0];
            this.origY = coord[1];
            this.contextDraft.strokeStyle = lineColor;
            this.contextReal.strokeStyle = lineColor;
            this.contextDraft.fillStyle = fillColor;
            this.contextReal.fillStyle = fillColor;
            this.contextDraft.lineWidth = $('input[id="line-size"]').val();
            this.contextReal.lineWidth = $('input[id="line-size"]').val();
        }
    }
  
    onDragging(coord, event) {
        // this.contextDraft.clearRect(
        // 0,
        // 0,
        // canvasDraft.width,
        // canvasDraft.height
        // );
        // this.contextDraft.beginPath()
        // this.contextDraft.ellipse(
        // this.origX,
        // this.origY,
        // Math.abs(coord[0]-this.origX),
        // Math.abs(coord[1]-this.origY),
        // 0,
        // 0,
        // 2 * Math.PI
        // );
        // $('input[id="fill-check"]')[0].checked ? this.contextDraft.fill() : this.contextDraft.stroke()
    }
  
    onMouseMove(coord) {
        if(this.started === true){
            if(this.oval === false){
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
                    $('input[id="fill-check"]')[0].checked ? this.contextDraft.fill() : this.contextDraft.stroke()
            }else{
                this.angle = this.x > this.y ? Math.atan((coord[1]-this.origY)/(coord[0]-this.origX)) : Math.atan((coord[1]-this.origY)/(coord[0]-this.origX)) + Math.PI/2
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
                    this.x,
                    this.y,
                    this.angle,
                    0,
                    2 * Math.PI
                    );
                    $('input[id="fill-check"]')[0].checked ? this.contextDraft.fill() : this.contextDraft.stroke()
            }
        }
    }
  
    onMouseUp(coord) {
        if(this.oval === false){
            this.oval = true
            this.contextDraft.clearRect(
            0,
            0,
            canvasDraft.width,
            canvasDraft.height
            );
            this.x = Math.abs(coord[0]-this.origX)
            this.y = Math.abs(coord[1]-this.origY)
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
            $('input[id="fill-check"]')[0].checked ? this.contextDraft.fill() : this.contextDraft.stroke()
        }else{
            this.oval = false
            this.started = false
            this.angle = this.x > this.y ? Math.atan((coord[1]-this.origY)/(coord[0]-this.origX)) : Math.atan((coord[1]-this.origY)/(coord[0]-this.origX)) + Math.PI/2
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
                this.x,
                this.y,
                this.angle,
                0,
                2 * Math.PI
                );
                $('input[id="fill-check"]')[0].checked ? this.contextReal.fill() : this.contextReal.stroke()
        }
    }
  
    onMouseLeave() {}
    onMouseEnter() {}

}