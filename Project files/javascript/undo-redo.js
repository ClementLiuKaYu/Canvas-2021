let imageArray = [];
let snapCount = -1;
	
function addSnapshot() {
    snapCount++;
    if (snapCount < imageArray.length) {
        imageArray.length = snapCount;}
    imageArray.push(document.getElementById('canvas-real').toDataURL());
}

function undo() {
    if (snapCount >= 0) {
        snapCount--;
        let canvasSnap = new Image();
        canvasSnap.src = imageArray[snapCount];
        contextReal.clearRect(
            0,
            0,
            contextReal.canvas.width,
            contextReal.canvas.height);
        canvasSnap.onload = function () { contextReal.drawImage(canvasSnap, 0, 0); }
    }
}

function redo() {
    if (snapCount < imageArray.length-1) {
        snapCount++;
        let canvasSnap = new Image();
        canvasSnap.src = imageArray[snapCount];
        canvasSnap.onload = function () { contextReal.drawImage(canvasSnap, 0, 0); }
    }
}