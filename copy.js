const r = require("raylib");
const screenWidth = 800;
const screenHeight = 400;
const FPS = 60;

let scanner1X = 1;
let d1_velocity = 1;
let scanner2X = (screenWidth * 0.5);
let d2_velocity = 1;

let scannerY = 1;
let d3_velocity = 1;

const scannerWidth = 30;



function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(screenWidth, screenHeight, "Rectangle");
    r.SetTargetFPS(FPS);
}
function moveScanner(scannerPos, min, max, velocity) {
    const scannerEnd = scannerPos + scannerWidth;
    if (scannerEnd > max || scannerPos < min)
        velocity = -velocity;
    return velocity
}



function overlap(scannerPosition, scannerWidth, particle1x, particle1Width) {

    if ((scannerPosition < (particle1x + particle1Width) && particle1x < (scannerPosition + scannerWidth))) {
        return r.RED;
    } else {
        return r.WHITE;
    }
}



function update() {
    d1_velocity = moveScanner(scanner1X, 0, (r.GetScreenWidth * 0.5), d1_velocity);
    scanner1X += d1_velocity;
    d2_velocity = moveScanner(scanner2X, (r.GetScreenWidth * 0.5), r.GetScreenWidth, d2_velocity);
    d3_velocity = moveScanner(scannerY, 0, (r.GetScreenHeight), d3_velocity);
}


function draw() {
    const particle1Width = 50;
    const particle1x = (screenWidth * 0.5) - particle1Width;

    const particle2x = (screenWidth * 0.70);
    const particle2Width = 20;

    const particleY = 100;
    const particleWidth = 10;

    const color1 = overlap(scanner1X, scannerWidth, particle1x, particle1Width);
    const color2 = overlap(scanner2X, scannerWidth, particle2x, particle2Width);
    const color3 = overlap(scannerY, scannerWidth, particleY, particleWidth);

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

};