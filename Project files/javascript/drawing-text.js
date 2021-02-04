class DrawingText extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
      this.clickNumber = 0;
    }
  
    onMouseUp(coord, event) {
      if (this.clickNumber !== 1) {
        //Make the input box appear on the clicked area
        $("#textInput").css({
          display: "block",
          transform:
            "translateY(" +
            `${coord[1]}` +
            "px)translateX(" +
            `${coord[0]}` +
            "px)",
          padding: "0",
          margin: "-10px -200px",
        });
  
        this.origX = coord[0];
        this.origY = coord[1];
        this.contextDraft.fillStyle = "black";
        this.contextDraft.font = "20px italic bold";
        let textContent = textInput.value;
        textInput.style["z-index"] = 1;
        textInput.value = "";
  
        this.contextDraft.fillText(textContent, this.origX, this.origY);
        this.clickNumber++;
      } else if (this.clickNumber === 1) {
        $("#textInput").css({
          display: "none",
          transform:
            "translateY(" + coord[1] + "px)translateX(" + coord[0] + "px)",
          padding: "0",
        });
        this.contextReal.fillStyle = fillColor;
        this.contextReal.font =" 20px italic bold";
  
        console.log(canvasSettings.textSize);
        let textContent = textInput.value;
        textInput.style["z-index"] = 6;
        textInput.value = "";
  
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.fillText(textContent, this.origX, this.origY);
        this.clickNumber = 0;
      }
    }
  onKeyPress() {
      if (this.clickNumber === 1) {
        $("#textInput").css({
          display: "none",
          transform:
            "translateY(" + this.origY + "px)translateX(" + this.origX + "px)",
          padding: "0",
        });
  
        // this.contextReal.font = ${canvasSettings.textsize}px ${canvasSettings.textfont};
        // this.contextReal.fillStyle = canvasSettings.colorFill;
  
        this.contextReal.font = "20px italic bold";
        this.contextReal.fillStyle = fillColor;
  
        let textContent = textInput.value;
        textInput.style["z-index"] = 6;
        textInput.value = "";
  
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.fillText(textContent, this.origX, this.origY);
        this.clickNumber = 0;
      }
    }
    onMouseDown() {}
    onMouseMove() {}
    onMouseLeave() {}
    onMouseEnter() {}
  }
  
  let test1 = { test: "test1" };
  let test2 = { test: "test2" };