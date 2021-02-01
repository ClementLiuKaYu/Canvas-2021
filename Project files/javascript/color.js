function docolor() {
    console.log("change");
    var myCanvas = document.querySelector("#canvas-real");
    var myCanvas = document.querySelector("#canvas-draft");
    var colorinput = document.querySelector("#clr");
    var color = colorinput.value;
    myCanvas.style.backgroundColor = color;

}