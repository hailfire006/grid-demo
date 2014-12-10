
var time = Date.now(); // last time run() was called
var canvas = document.getElementById('gameCanvas');
// Game grid is drawn & updated continuously, also used by other js files
var grid = makeGrid(4, 4);
// TODO move grid global into Game namespace, if possible

var TILE_WIDTH = 50;
var TILE_HEIGHT = 50;

var runIntervalId;

//functions
function run() {
    // update game state, draw game state, repeat
    var secondsElapsed = (Date.now() - time) / 1000;
    update(secondsElapsed);
    draw();
    time = Date.now();
}
function update(mod) {
    grid.handleKeys();
    grid.update(mod);
}
function draw() {
    var ctx = canvas.getContext("2d");
    clearScreen(ctx);
    grid.draw(ctx);
}
function clearScreen(ctx) {
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function addEventListeners() {
    window.addEventListener('keydown', function(e) {
        grid.keysDown[e.keyCode] = true;
    });
    window.addEventListener('keyup', function(e) {
        delete grid.keysDown[e.keyCode];
    //    keysUp[e.keyCode] = true;
    });
}

function startGame() {
    grid.addPlayer();
    setInterval(run, 50);
    addEventListeners();
}
startGame();
