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
    $(".canvas").css("cursor","text");
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

  // Instructions
  $("#draw").hover(function(){
    $(".instructions").html("Click and drag to draw lines");
  });
  $("#brush1").hover(function(){
    $(".instructions").html("Pencil");
  });
  $("#brush2").hover(function(){
    $(".instructions").html("Marker");
  });
  $("#brush3").hover(function(){
    $(".instructions").html("With shadow");
  });
  $("#brush4").hover(function(){
    $(".instructions").html("Crayon");
  });
  $("#brush5").hover(function(){
    $(".instructions").html("Spray");
  });
  $("#brush6").hover(function(){
    $(".instructions").html("Colored Pixels");
  });
  $("#straight-line").hover(function(){
    $(".instructions").html("Click and drag to draw a straight line");
  });
  $("#curve").hover(function(){
    $(".instructions").html("Click and drag to draw a straight line, then click a point to create the curve");
  });
  $("#quad-curve").hover(function(){
    $(".instructions").html("Click and drag to draw a straight line, then click a point to create the curve");
  });
  $("#bezier-curve").hover(function(){
    $(".instructions").html("Click and drag to draw a straight line, then release and move the cursor, click to make the curve you like");
  });
  $("#square").hover(function(){
    $(".instructions").html("Click and drag to draw a square");
  });
  $("#square1").hover(function(){
    $(".instructions").html("Click and drag to draw a square");
  });
  $("#rect").hover(function(){
    $(".instructions").html("Click and drag to draw a rectangle");
  });
  $("#polygon").hover(function(){
    $(".instructions").html("Click and drag to draw a polygon");
  });
  $("#irr-poly").hover(function(){
    $(".instructions").html("Click and drag to draw an irregular polygon");
  });
  $("#regular-poly").hover(function(){
    $(".instructions").html("Enter the number of sides of the polygon, click this button, click the canvas and drag to draw a regular polygon");
  });
  $("#circle").hover(function(){
    $(".instructions").html("Click and drag to draw a circle");
  });
  $("#circle2").hover(function(){
    $(".instructions").html("Click and drag to draw a circle");
  });
  $("#oval").hover(function(){
    $(".instructions").html("Click and drag to draw an oval");
  });
  $("#text").hover(function(){
    $(".instructions").html("Click and type");
  });
  $("#eraser").hover(function(){
    $(".instructions").html("Click and drag to erase");
  });
  $("#clear").hover(function(){
    $(".instructions").html("Clear everything");
  });
  $("#redo").hover(function(){
    $(".instructions").html("Redo");
  });
  $("#undo").hover(function(){
    $(".instructions").html("Undo");
  });
  $("#download").hover(function(){
    $(".instructions").html("Download your drawings to PNG file");
  });
})