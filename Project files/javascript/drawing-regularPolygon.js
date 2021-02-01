let numberOfSides = 5;
let angle = (2*Math.PI)/numberOfSides;

class DrawingPolygon extends PaintFunction {
    constructor(contextReal,contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord, event) {
        this.origX = coord[0];
        this.origY = coord[1];
    }

    onDragging(coord, event) {
        this.contextDraft.clearRect(
        0,
        0,
        canvasDraft.width,
        canvasDraft.height
        );
        this.contextDraft.beginPath();
        // moveTo(Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0))
        this.contextDraft.moveTo((
        (this.origX + coord[0])/2)+Math.sqrt(Math.pow(this.origX-coord[0],2)+Math.pow(this.origY-coord[1],2))/2, 
        (this.origY + coord[1])/2);
        //Set up a loop to draw each line of the polygon
        for (let i=1; i<=numberOfSides; i++){
            // lineTo(x + radius*Math.cos(i * angle), y + radius*Math.sin(i * angle))
            this.contextDraft.lineTo(
            (this.origX + coord[0])/2+(Math.sqrt(Math.pow(this.origX-coord[0],2)+Math.pow(this.origY-coord[1],2))/2)*Math.cos(i*angle),
            (this.origY + coord[1])/2+(Math.sqrt(Math.pow(this.origX-coord[0],2)+Math.pow(this.origY-coord[1],2))/2)*Math.sin(i*angle)
            );
        }
        this.contextDraft.stroke();
    }

    onMouseMove() {}

    onMouseUp(coord) {
        this.contextDraft.clearRect(
        0,
        0,
        canvasDraft.width,
        canvasDraft.height
        );
        this.contextReal.beginPath();
        this.contextReal.moveTo((
        (this.origX + coord[0])/2)+Math.sqrt(Math.pow(this.origX-coord[0],2)+Math.pow(this.origY-coord[1],2))/2, 
        (this.origY + coord[1])/2);
        for (let i=1; i<=numberOfSides; i++){
            this.contextReal.lineTo(
            (this.origX + coord[0])/2+(Math.sqrt(Math.pow(this.origX-coord[0],2)+Math.pow(this.origY-coord[1],2))/2)*Math.cos(i*angle),
            (this.origY + coord[1])/2+(Math.sqrt(Math.pow(this.origX-coord[0],2)+Math.pow(this.origY-coord[1],2))/2)*Math.sin(i*angle)
            );
        }
        this.contextReal.stroke();
    }

    onMouseLeave() {}
    onMouseEnter() {}
}