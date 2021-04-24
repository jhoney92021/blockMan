var playerObject = {
    x: 1,
    y: 1
}

function drawPlayerObject() {
    document.getElementById('playerObject').style.top =
        playerObject.y * 40 + 'px'
    document.getElementById('playerObject').style.left =
        playerObject.x * 40 + 'px'
}
drawPlayerObject()

document.onkeydown = function (e) {
    console.log(e.keyCode);
    if (e.keyCode == 37 || e.keyCode == 65) {// move left
        if (level[playerObject.y][playerObject.x - 1] != 1) {
            playerObject.x--;
        }
    }
    if (e.keyCode == 39 || e.keyCode == 68) {//move right
        if (level[playerObject.y][playerObject.x + 1] != 1) {
            playerObject.x++;
        }
    }
    if (e.keyCode == 38 || e.keyCode == 87) {//move up
        if (level[playerObject.y - 1][playerObject.x] != 1) {
            playerObject.y--;
        }
    }
    if (e.keyCode == 40 || e.keyCode == 83) {//move down
        if (level[playerObject.y + 1][playerObject.x] != 1) {
            playerObject.y++;
        }
    }
    // if (level[playerObject.y][playerObject.x] == 2) {
    //     score += 10;
    // }
    // if (level[playerObject.y][playerObject.x] == 3) {
    //     score += 5;
    // }
    // //collision
    // if (playerObject.y == bluey.y && playerObject.x == bluey.x) {
    //     lives--;
    // }
    // if (playerObject.y == pinky.y && playerObject.x == pinky.x) {
    //     lives--;
    // }
    // if (playerObject.y == pumpky.y && playerObject.x == pumpky.x) {
    //     lives--;
    // }
    // if (playerObject.y == red.y && playerObject.x == red.x) {
    //     lives--;
    // }


    level[playerObject.y][playerObject.x] = 0;

    drawPlayerObject();
    drawLevel();
}