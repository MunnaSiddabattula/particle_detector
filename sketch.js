const r = require("raylib");

const screenWidth = 300;
const screenHeight = 200;
const FPS = 60;

const obstWidth = 50;
const obst1x = (screenWidth * 0.5) - obstWidth;

let scannerPosition = 0;
let scannerWidth = 30;
let scannerDirection = 1;
let scannerSpeed = 2;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(screenWidth, screenHeight, "Rectangle");
    r.SetTargetFPS(FPS);
}

function update() {
    move();
}

function move() {
    scannerPosition += scannerDirection * scannerSpeed;

    if (scannerPosition + scannerWidth >= screenWidth) {
        scannerPosition = screenWidth - scannerWidth;
        scannerDirection = -1;
    }

    if (scannerPosition <= 0) {
        scannerPosition = 0;
        scannerDirection = 1;
    }
}
function overlap() {
    if (scannerPosition < (obst1x + obstWidth) && obst1x < (scannerPosition + scannerWidth)) {
        return "detected";
    }
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK)

    r.DrawRectangle(
        obst1x,
        0,
        obstWidth,
        screenHeight,
        r.BLUE
    );
    if (overlap() === "detected")
        r.DrawRectangle(
            scannerPosition,
            0,
            scannerWidth,
            screenHeight,
            r.RED
        );
    else {
        r.DrawRectangle(
            scannerPosition,
            0,
            scannerWidth,
            screenHeight,
            r.WHITE);
    }
    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}


module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,

};