function mapLevel() {

    var levelHeight = 12;
    levelHeight++;    

    var level = [];

    for (var i = 0; i <= levelHeight; i++) {//map height
        level.push([]);
    }

    var lastLevelRow = level.length - 1

    for (var i = 0; i < 13; i++) {//hard borders
        level[0].push(objectDictionary["wallTile"]);
        level[lastLevelRow].push(objectDictionary["wallTile"]);
    }

    level[1].push(objectDictionary["wallTile"]);
    level[11].push(objectDictionary["wallTile"]);

    for (var i = 1; i < 12; i++) {//hard borders
        level[1].push(objectDictionary["emptyTile"]);
        level[11].push(objectDictionary["emptyTile"]);
    }

    level[1].push(objectDictionary["wallTile"]);
    level[11].push(objectDictionary["wallTile"]);

    for (var row = 2; row < 11; row++) {//soft border
        level[row].push(objectDictionary["wallTile"]);
        level[row].push(objectDictionary["emptyTile"]);

        for (var i = 2; i < 11; i++) {//innermap
            level[row].push(random(2));
        }

        level[row].push(objectDictionary["emptyTile"]);//soft border   
        level[row].push(objectDictionary["wallTile"]);
    }

    console.log("mapping level");
    console.log(level);

    return level;
};