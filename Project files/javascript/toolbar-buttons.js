$(()=>{
  $(".pickr .pcr-button::before").css("border-radius",0)
  // Page initialization
  currentFunction =  new DrawingLine(contextReal)
  $(".button-drop-down").hide()
  let currentDropDown = null

  $("#drawing-rectangle").click(() => {
    currentFunction = new DrawingRectangle(contextReal, contextDraft);
  });
  $("#drawing-line").click(() => {
    currentFunction = new DrawingLine(contextReal);
  });

  // Drop-down switches
  $("#draw").click(() => {
    if (currentDropDown == "brush") {
      currentDropDown = null
    }else{
      $(".button-drop-down").animate({height:'hide'},{duration:600})
      currentDropDown = "brush"
    }
    $(".brush").animate({height:'toggle'},{duration:600})
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
    // $(".straight-line").animate({height:'toggle'},{duration:600})
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

  $("#square").click(() => {
    if (currentDropDown == "square") {
      currentDropDown = null
    }else{
      $(".button-drop-down").animate({height:'hide'},{duration:600})
      currentDropDown = "square"
    }
    $(".square").animate({height:'toggle'},{duration:600})
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

  $("#circle").click(() => {
    if (currentDropDown == "circle") {
      currentDropDown = null
    }else{
      $(".button-drop-down").animate({height:'hide'},{duration:600})
      currentDropDown = "circle"
    }
    $(".circle").animate({height:'toggle'},{duration:600})
  });

  $("#eraser").click(() => {
    if (currentDropDown == "eraser") {
      currentDropDown = null
    }else{
      $(".button-drop-down").animate({height:'hide'},{duration:600})
      currentDropDown = "eraser"
    }
    // $(".eraser").animate({height:'toggle'},{duration:600})
  });

  $("#draw").click(() => {
    currentFunction = new DrawingLine(contextReal);
  });

  $("#straight-line").click(() => {
    console.log(currentFunction)
    currentFunction = new DrawingStraightLine(contextReal, contextDraft);
  });

  $("#curve").click(() => {
    currentFunction = new DrawingQuadCurve(contextReal, contextDraft);
  });

  $("#square").click(() => {
    currentFunction = new DrawingRectangle(contextReal, contextDraft);
  });

  $("#polygon").click(() => {
    currentFunction = new DrawingPolygon(contextReal, contextDraft);
  });

  $("#circle").click(() => {
    currentFunction = new DrawingCircle(contextReal, contextDraft);
  });

  $("#eraser").click(() => {
    currentFunction = new Erase(contextReal, contextDraft);
  });

  // $("#drawing-rectangle").click(() => {
  //   currentFunction = new DrawingRectangle(contextReal, contextDraft);
  // });
})