const r = require("raylib");

const screenWidth = 800;
const screenHeight = 400;
const FPS = 60;
const particle1Width = 50;
const particle1x = (screenWidth * 0.5) - particle1Width;

const particle2x = (screenWidth * 0.70);
const particle2Width = 20;

const particleY = 100;
const particleWidth = 10;


let scanner1X = 0;
let scanner1Direction = 1;

let scanner2X = (screenWidth * 0.5);


let scannerY = 0;


let scannerWidth = 30;



function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(screenWidth, screenHeight, "Rectangle");
    r.SetTargetFPS(FPS);
}

function update() {
    const s1Boundary = screenWidth * 0.5;
    const s2Boundary = screenWidth;
    scanner1X += moveScanner(scanner1X, s1Boundary, 0);
    scanner2X += moveScanner(scanner2X, s2Boundary, s1Boundary);
    scannerY += moveScanner(scannerY, screenHeight, 0);
}


function moveScanner(scannerStart, scannerRightBoundary, scannerLeftBoundary) {
    if (scannerStart + scannerWidth >= scannerRightBoundary) {
        scanner1Direction = -2;
    }

    if (scannerStart <= scannerLeftBoundary) {
        scanner1Direction = 2;
    }
    return scanner1Direction;
}


function overlap(scannerPosition, scannerWidth, particle1x, particle1Width) {

    if ((scannerPosition < (particle1x + particle1Width) && particle1x < (scannerPosition + scannerWidth))) {
        return r.RED;
    } else {
        return r.WHITE;
    }
}
function drawRange() {


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
    r.DrawRectangle(0,
        particleY,
        screenWidth,
        particleWidth,
        r.BLUE);

}



function draw() {


    r.BeginDrawing();
    r.ClearBackground(r.BLACK)

    drawRange(
        particle1x,
        0,
        particle1Width);

    drawRange(
        particle2x,
        0,
        particle2Width);

    drawRange(0,
        particleY,
        particleWidth);

    const color1 = overlap(scanner1X, scannerWidth, particle1x, particle1Width);
    const color2 = overlap(scanner2X, scannerWidth, particle2x, particle2Width);
    const color3 = overlap(scannerY, scannerWidth, particleY, particleWidth);

    r.DrawRectangle(
        scanner1X,
        0,
        scannerWidth,
        screenHeight,
        color1);


    r.DrawRectangle(
        scanner2X,
        0,
        scannerWidth,
        screenHeight,
        color2);

    r.DrawRectangle(
        0,
        scannerY,
        screenWidth,
        scannerWidth,
        color3);




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
}