function mapLevel() {

    var level = [];

    for (var i = 0; i < 13; i++) {
        level.push([]);
    }

    for (var i = 0; i < 13; i++) {//hard borders
        level[0].push(1);
        level[12].push(1);
    }

    level[1].push(1);
    level[11].push(1);

    for (var i = 1; i < 12; i++) {//hard borders
        level[1].push(2);
        level[11].push(2);
    }

    level[1].push(1);
    level[11].push(1);

    for (var row = 2; row < 11; row++) {//soft border
        level[row].push(1);
        level[row].push(2);
        for (var i = 2; i < 11; i++) {//innermap
            level[row].push(random(3));
        }

        level[row].push(2);//soft border   
        level[row].push(1);
    }

    console.log("mapping level");

    return level;
};