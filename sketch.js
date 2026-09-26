const r = require("raylib");

const screenWidth = 600;
const screenHeight = 400;
const FPS = 60;

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

function draw() {
    let obstWidth = 50;
    r.BeginDrawing();
    r.ClearBackground(r.BLACK)

    r.DrawRectangle(
        ((screenWidth * 1.5) - obstWidth),
        0,
        obstWidth,
        screenHeight,
        r.BLUE
    );

    r.DrawRectangle(
        scannerPosition,
        0,
        scannerWidth,
        screenHeight,
        r.WHITE
    );
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