const scannerWidth = 30;

function moveScanner(scannerPos, max, min) {
    // const screenWidth = 800;
    // let scanner1X = 0;
    // let scanner1Speed = 1;
    // let scanner2X = (screenWidth * 0.5);
    // let scanner2Speed = 2;
    // let scannerY = 0;
    // let scannerYSpeed = 3;


    if (scannerPos + scannerWidth === max) {
        direction = -1;
    }
    if (scannerPos === min) {
        direction = 1;
    }
}
//     if (scannerPos === scanner1X)
//         return scannerPos = scannerPos + (direction * scanner1Speed);
//     if (scannerPos === scanner2X)
//         return scannerPos = scannerPos + (direction * scanner2Speed);
//     if (scannerPos === scannerY)
//         return scannerPos = scannerPos + (direction * scannerYSpeed);
// }



function overlap(scannerPosition, scannerWidth, particle1x, particle1Width) {
    const r = require("raylib");

    if ((scannerPosition < (particle1x + particle1Width) && particle1x < (scannerPosition + scannerWidth))) {
        return r.RED;
    }
    return r.WHITE;
}
module.exports = {
    overlap,
    moveScanner,
}


const r = require("raylib");
const f = require("./functions")
const screenWidth = 800;
const screenHeight = 400;
const FPS = 60;

let scanner1X = 0;
let scanner1Direction = 1;

let scanner2X = (screenWidth * 0.5);
let scanner2Direction = 1;

let scannerY = 0;
let scanner3Direction = 1;





function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(screenWidth, screenHeight, "Rectangle");
    r.SetTargetFPS(FPS);
}

function update() {
    scanner1X = f.moveScanner1();
    scanner2X = f.moveScanner2();
    scannerY = f.moveScannerY();
}


function draw() {
    const particle1Width = 50;
    const particle1x = (screenWidth * 0.5) - particle1Width;

    const particle2x = (screenWidth * 0.70);
    const particle2Width = 20;

    const particleY = 100;
    const particleWidth = 10;

    const color1 = f.overlap(scanner1X, scannerWidth, particle1x, particle1Width);
    const color2 = f.overlap(scanner2X, scannerWidth, particle2x, particle2Width);
    const color3 = f.overlap(scannerY, scannerWidth, particleY, particleWidth);

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



    r.DrawRectangle(0,
        particleY,
        screenWidth,
        particleWidth,
        r.BLUE);

    r.DrawRectangle(0, scannerY, screenWidth, scannerWidth, color1);



    r.DrawRectangle(
        scanner1X,
        0,
        scannerWidth,
        screenHeight,
        color2
    );



    r.DrawRectangle(
        scanner2X,
        0,
        scannerWidth,
        screenHeight,
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

};