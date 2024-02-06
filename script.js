let textHistory = [];
let currentTextIndex = -1;

function undo() {
    if (currentTextIndex > 0) {
        currentTextIndex--;
        updateTextField();
    }
}

function redo() {
    if (currentTextIndex < textHistory.length - 1) {
        currentTextIndex++;
        updateTextField();
    }
}

function updateTextField() {
    const texts = textHistory.map(({
        text,
        font,
        size,
        color
    }) => `<div style="color: ${color}; font-family: ${font}; font-size: ${size};">${text}</div>`);
    document.getElementById("final-text").innerHTML = texts.join('');
}

function changeFont(font) {
    document.getElementById("text-field").style.fontFamily = font;
}

function changeSize(size) {
    document.getElementById("text-field").style.fontSize = size;
}

function changeColor(color) {
    document.getElementById("text-field").style.color = color;
}

function addText() {
    const newText = document.getElementById("text-field").value;
    const font = document.getElementById("text-field").style.fontFamily;
    const size = document.getElementById("text-field").style.fontSize;
    const color = document.getElementById("text-field").style.color;

    textHistory.push({
        text: newText,
        font,
        size,
        color
    });
    currentTextIndex = textHistory.length - 1;


    updateTextField();
}