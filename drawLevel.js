function drawLevel() {
    drawOutput = "";

    for (var drawWidth = 0; drawWidth < level.length; drawWidth++) {
        drawOutput += "<div class = 'drawWidth'>"
        for (var x = 0; x < level[drawWidth].length; x++) {
            drawOutput += "<div class = '" + objectDictionary[level[drawWidth][x]] + "'></div>"
        }
        drawOutput += "</div>"
    }
    console.log("drawing level");

    document.getElementById('level').innerHTML = drawOutput;
};

var level = mapLevel();

drawLevel();