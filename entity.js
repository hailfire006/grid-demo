function makeEntity() {
    var entity = {};
    entity.draw = function(ctx,x,y) {
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fillRect(x + 5, y + 5, TILE_WIDTH - 10, TILE_HEIGHT - 10);
        ctx.stroke();
    }
    return entity;
}
function makePlayer() {
    var player = makeEntity();
    player.draw = function(ctx,x,y) {
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.fillRect(x + 5, y + 5, TILE_WIDTH - 10, TILE_HEIGHT - 10);
        ctx.stroke();
    }
    return player;
}
function makeTree() {
    var tree = makeEntity();
    tree.draw = function(ctx,x,y) {
        ctx.beginPath();
        ctx.fillStyle = "green";
        ctx.fillRect(x + 5, y + 5, TILE_WIDTH - 10, TILE_HEIGHT - 10);
        ctx.stroke();
    }
    return tree;
}