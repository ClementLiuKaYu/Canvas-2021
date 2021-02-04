$(()=>{
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