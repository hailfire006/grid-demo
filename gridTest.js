function makeGrid(width, height) {
    var matrix = new Array(width);
    for (var i = 0; i < width; i++) {
        matrix[i] = new Array(height);
    }
   
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (Math.random() > .5) {
                matrix[i][j] = makeTree();
            }
        }
    }
    //end of important stuff
    matrix.player;
    matrix.viewX = 0;
    matrix.viewY = 0;
    
    matrix.keysDown = {};
    
    matrix.addPlayer = function() {
        matrix.player = makePlayer();
        this[2][2] = matrix.player;
        matrix.playerX = 2;
        matrix.playerY = 2;
    }
    matrix.update = function() {
        var dx = canvas.width /TILE_WIDTH /2;
        var dy = canvas.height /TILE_HEIGHT /2;
        matrix.viewX = Math.floor(matrix.playerX - dx);
        matrix.viewY = Math.floor(matrix.playerY - dy);
        if (matrix.viewX < 0) {
            matrix.viewX = 0;
        }
        if (matrix.viewY < 0) {
            matrix.viewY = 0;
        }
    };
    matrix.draw = function(ctx) {
        var transX = -matrix.viewX * TILE_WIDTH;
        var transY = -matrix.viewY * TILE_HEIGHT;
        ctx.translate(transX,transY);
        for (var i = matrix.viewX; i < grid.length; i++) {
            for (var j = matrix.viewY; j < grid[i].length; j++) {
                    ctx.beginPath();
                    ctx.strokeStyle = "black";
                    ctx.rect(i * TILE_WIDTH, j * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT);
                    ctx.stroke();
                if (this[i][j]) {
                    this[i][j].draw(ctx,i * TILE_WIDTH, j * TILE_HEIGHT);
                }
            }
        }
        ctx.translate(-transX,-transY);
    };
    matrix.movePlayer = function(dx,dy) {
        var newX = matrix.playerX + dx;
        var newY = matrix.playerY + dy;
        if (newX >= 0 && newY >= 0 && newX < matrix.length && newY < matrix[0].length) {
            this[newX][newY] = matrix.player;
            delete this[matrix.playerX][matrix.playerY];
            matrix.playerX = newX;
            matrix.playerY = newY;
        }
    }
    matrix.handleKeys = function() {
        var keysDown = matrix.keysDown;
        if (37 in keysDown || 65 in keysDown) { //left
            matrix.movePlayer(-1,0);
        }
        if (38 in keysDown || 87 in keysDown) { //up
            matrix.movePlayer(0,-1);
        }
        if (39 in keysDown || 68 in keysDown) { //right
            matrix.movePlayer(1,0);
        }
        if (40 in keysDown || 83 in keysDown) { //down
            matrix.movePlayer(0,1);
        }
    }
    return matrix;
}


