/**********************************************
 * Drawing Rectangle Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvas-common
 ***********************************************/
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect

class DrawingRectangle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
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
    // Pass in the original x and y coordinates, followed by the new coordinates that we get for position x and y
    $('input[id="fill-check"]')[0].checked ? 
    this.contextDraft.fillRect(
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[1] - this.origY
    ):
    this.contextDraft.strokeRect(
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[1] - this.origY
    )
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
    $('input[id="fill-check"]')[0].checked ? 
    this.contextReal.fillRect(
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[1] - this.origY
    ):
    this.contextReal.strokeRect(
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[1] - this.origY
    )
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
