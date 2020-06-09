'use strict'
var gCtx;
var gElCanvas
var gCurrShape = 'line'
var gUseFill = true



function init() {
    gElCanvas = document.getElementById('drawing');
    gCtx = gElCanvas.getContext('2d');
    gCtx.fillStyle = '#000';
    gCtx.strokeStyle = '#000'
    resizeCanvas();
}

function resizeCanvas() {
    var elCanvasContainer = document.querySelector('.canvas-container');
    gElCanvas.width = elCanvasContainer.offsetWidth;
    gElCanvas.height = elCanvasContainer.offsetHeight;
}



function onStrokeColorChange() {
    gCtx.strokeStyle = document.querySelector('.stroke-color-picker').value;

}

function onFillColorChange() {
    gCtx.fillStyle = document.querySelector('.fill-color-picker').value;
    console.log(gCtx.fillStyle)
}

function onUseFillChange() {
    gUseFill = !gUseFill
}

function onShapeChange() {
    gCurrShape = document.querySelector('.shape-selector').value;
    console.log(gCurrShape);

}

function draw(ev) {
    console.log(ev)
    const { offsetX, offsetY } = ev;

    switch (gCurrShape) {
        case 'line':
            drawLine(offsetX, offsetY);
            break;
        case 'rectangle':
            drawRect(offsetX, offsetY);
            break;
        case 'triangle':
            drawTriangle(offsetX, offsetY);
            break;
        case 'circle':
            drawCircle(offsetX, offsetY);
            break;
    }
}

function drawLine(x, y) {
    gCtx.beginPath();
    gCtx.moveTo(x, y);
    gCtx.lineTo(x + 100, y + 100)
    gCtx.closePath()
    gCtx.stroke();
}

function drawRect(x, y) {
    gCtx.beginPath();
    gCtx.rect(x, y, 100, 100);
    gCtx.stroke()
    if (gUseFill) gCtx.fillRect(x, y, 100, 100);
}

function drawTriangle(x, y) {
    gCtx.beginPath();
    gCtx.moveTo(x, y);
    gCtx.lineTo(x + 50, y + 50);
    gCtx.lineTo(x - 50, y + 50);
    gCtx.closePath();
    gCtx.stroke();
    if (gUseFill)gCtx.fill()
}

function drawCircle(x, y) {
    gCtx.beginPath();
    gCtx.lineWidth = '6';
    gCtx.arc(x, y, 60, 0, 2 * Math.PI);
    gCtx.stroke();
    if (gUseFill)gCtx.fill()

}



// STORAGE

function loadFromStorage(key) {
    var json = localStorage.getItem(key)
    var value = JSON.parse(json)
    return value;
}

function saveToStorage(key, value) {
    var json = JSON.stringify(value);
    localStorage.setItem(key, json)
}  