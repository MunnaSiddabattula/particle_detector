const r = require("raylib");

const screenWidth = 800;
const screenHeight = 400;
const FPS = 60;

const particle1Width = 50;
const particle1x = (screenWidth * 0.5) - particle1Width;

const particle2x = (screenWidth * 0.70);
const particle2Width = 20;

let scanner1X = 0;
let scannerWidth = 30;

let scanner2X = (screenWidth * 0.5);

let scannerDirection = 1;
let scannerSpeed = 5;
let scanner2Speed = 2;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(screenWidth, screenHeight, "Rectangle");
    r.SetTargetFPS(FPS);
}

function update() {
    moveScanner1();
    moveScanner2();
}

function moveScanner1() {
    scanner1X += scannerDirection * scannerSpeed;

    if (scanner1X + scannerWidth >= (screenWidth * 0.5)) {
        scanner1X = (screenWidth * 0.5) - scannerWidth;
        scannerDirection = -1;
    }

    if (scanner1X <= 0) {
        scanner1X = 0;
        scannerDirection = 1;
    }
}
function moveScanner2() {
    scanner2X += scannerDirection * scanner2Speed;

    if (scanner2X + scannerWidth >= screenWidth) {
        scanner2X = screenWidth - scannerWidth;
        scannerDirection = -1;
    }

    if (scanner2X <= 0) {
        scanner2X = 0;
        scannerDirection = 1;
    }
}
function overlap(scannerPosition, scannerWidth, particle1x, particle1Width) {
    return (scannerPosition < (particle1x + particle1Width) && particle1x < (scannerPosition + scannerWidth));
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK)

    r.DrawRectangle(
        particle1x,
        0,
        particle1Width,
        screenHeight,
        r.BLUE);

    r.DrawRectangle(
        particle2x,
        0,
        particle2Width,
        screenHeight,
        r.BLUE
    );
    const detected1 = overlap(scanner1X, scannerWidth, particle1x, particle1Width);
    const detected2 = overlap(scanner2X, scannerWidth, particle2x, particle2Width);
    if (detected1) {
        r.DrawRectangle(
            scanner1X,
            0,
            scannerWidth,
            screenHeight,
            r.RED
        );
    } else {
        r.DrawRectangle(
            scanner1X,
            0,
            scannerWidth,
            screenHeight,
            r.WHITE);
    }

    if (detected2) {
        r.DrawRectangle(
            scanner2X,
            0,
            scannerWidth,
            screenHeight,
            r.RED
        );
    } else {
        r.DrawRectangle(
            scanner2X,
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