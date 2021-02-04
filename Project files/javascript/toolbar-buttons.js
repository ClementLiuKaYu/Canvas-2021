let currentDropDown = null
$(()=>{
  $(".pickr .pcr-button::before").css("border-radius",0)
  // Page initialization
  currentFunction =  new DrawingLine(contextReal)
  $(".button-drop-down").hide()
  // let currentDropDown = null

  $("#drawing-rectangle").click(() => {
    currentFunction = new DrawingRectangle(contextReal, contextDraft);
  });
  $("#drawing-line").click(() => {
    currentFunction = new DrawingLine(contextReal);
  });

  // Drop-down switches and buttons
  $("#draw").click(() => {
    if (currentDropDown == "brush") {
      currentDropDown = null
    }else{
      $(".button-drop-down").animate({height:'hide'},{duration:600})
      currentDropDown = "brush"
    }
    $(".brush").animate({height:'toggle'},{duration:600})
  });

  $("#draw").click(() => {
    currentFunction = new DrawingLine(contextReal);
  });

  $("#brush1").click(() => {
    currentFunction = new PenBrush(contextReal, contextDraft);
  });

  $("#brush2").click(() => {
    currentFunction = new CrayonBrush(contextReal, contextDraft);
  });

  $("#brush3").click(() => {
    currentFunction = new ShadowBrush(contextReal, contextDraft);
  });

  $("#brush4").click(() => {
    currentFunction = new MarkerBrush(contextReal, contextDraft);
  });

  $("#brush5").click(() => {
    currentFunction = new SprayBrush(contextReal, contextDraft);
  });

  $("#brush6").click(() => {
    currentFunction = new ColouredPixelsBrush(contextReal, contextDraft);
  });

  $("#straight-line").click(() => {
    if (currentDropDown == "straight-line") {
      currentDropDown = null
    }else{
      $(".button-drop-down").animate({height:'hide'},{duration:600})
      currentDropDown = "straight-line"
    }
  });

  $("#straight-line").click(() => {
    currentFunction = new DrawingStraightLine(contextReal, contextDraft);
  });

  $("#curve").click(() => {
    if (currentDropDown == "curve") {
      currentDropDown = null
    }else{
      $(".button-drop-down").animate({height:'hide'},{duration:600})
      currentDropDown = "curve"
    }
    $(".curve").animate({height:'toggle'},{duration:600})
  });

  $("#curve").click(() => {
    currentFunction = new DrawingQuadCurve(contextReal, contextDraft);
  });

  $("#quad-curve").click(() => {
    currentFunction = new DrawingQuadCurve(contextReal, contextDraft);
  });

  $("#bezier-curve").click(() => {
    currentFunction = new DrawingBezierCurve(contextReal, contextDraft);
  });

  $("#square").click(() => {
    if (currentDropDown == "square") {
      currentDropDown = null
    }else{
      $(".button-drop-down").animate({height:'hide'},{duration:600})
      currentDropDown = "square"
    }
    $(".square").animate({height:'toggle'},{duration:600})
  });

  $("#square").click(() => {
    currentFunction = new DrawingRectangle(contextReal, contextDraft);
  });

  $("#polygon").click(() => {
    if (currentDropDown == "polygon") {
      currentDropDown = null
    }else{
      $(".button-drop-down").animate({height:'hide'},{duration:600})
      currentDropDown = "polygon"
    }
    $(".polygon").animate({height:'toggle'},{duration:600})
  });

  $("#polygon").click(() => {
    currentFunction = new DrawingIrrPolygon(contextReal, contextDraft);
  });

  $("#regular-poly").click(() => {
    currentFunction = new DrawingPolygon(contextReal, contextDraft);
  });

  $("#irr-poly").click(() => {
    currentFunction = new DrawingIrrPolygon(contextReal, contextDraft);
  });

  $("#circle").click(() => {
    if (currentDropDown == "circle") {
      currentDropDown = null
    }else{
      $(".button-drop-down").animate({height:'hide'},{duration:600})
      currentDropDown = "circle"
    }
    $(".circle").animate({height:'toggle'},{duration:600})
  });

  $("#circle").click(() => {
    currentFunction = new DrawingCircle(contextReal, contextDraft);
  });

  $("#circle2").click(() => {
    currentFunction = new DrawingCircle(contextReal, contextDraft);
  });

  $("#oval").click(() => {
    currentFunction = new DrawingOval(contextReal, contextDraft);
  });

  $("#text").click(() => {
    if (currentDropDown == "text") {
      currentDropDown = null
    }else{
      $(".button-drop-down").animate({height:'hide'},{duration:600})
      currentDropDown = "text"
    }
  });

  $("#text").click(() => {
    currentFunction = new Erase(contextReal, contextDraft);
  });

  $("#eraser").click(() => {
    if (currentDropDown == "eraser") {
      currentDropDown = null
    }else{
      $(".button-drop-down").animate({height:'hide'},{duration:600})
      currentDropDown = "eraser"
    }
  });

  $("#eraser").click(() => {
    currentFunction = new Erase(contextReal, contextDraft);
  });

  $("#download").click((e) => {
    let image = canvasReal.toDataURL();
    let tempLink = document.createElement("a");
    tempLink.download = "image.png";
    tempLink.href = image;
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  })
})