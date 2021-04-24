function drawLevel() {
    drawOutput = "";

    for (var levelRow = 0; levelRow < level.length; levelRow++) {
        drawOutput += "<div class = 'drawWidth'>"
        for (var x = 0; x < level[levelRow].length; x++) {
            drawOutput += "<div class = '" + objectDictionary[level[levelRow][x]] + "'></div>"
        }
        drawOutput += "</div>"
    }
    console.log("drawing level");
    // console.log(drawOutput);

    document.getElementById('level').innerHTML = drawOutput;
};

var level = mapLevel();

drawLevel();