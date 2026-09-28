const r = require("raylib");

const screenWidth = 800;
const screenHeight = 400;
const FPS = 60;

const field1Width = 50;
const field1x = (screenWidth * 0.5) - field1Width;

const field2x = (screenWidth * 0.70);
const field2Width = 20;

const fieldY = 100;
const field3Width = 10;

let detector1X = 0;
let d1_Velocity = 1;

let detector2X = (screenWidth * 0.5);
let d2_Velocity = 2;

let detectorY = 0;
let d3_Velocity = 4;

let detectorWidth = 30;

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
    d1_Velocity = calcVelocity(d1_Velocity, detector1X, s1Boundary, 0);
    d2_Velocity = calcVelocity(d2_Velocity, detector2X, s2Boundary, s1Boundary);
    d3_Velocity = calcVelocity(d3_Velocity, detectorY, screenHeight, 0);

    detector1X += d1_Velocity;
    detector2X += d2_Velocity
    detectorY += d3_Velocity;
}

function isOutofBounds(detectorPos, upperBound, lowerBound) {
    return (detectorPos + detectorWidth >= upperBound) || (detectorPos < lowerBound);
}

function calcVelocity(velocity, detectorPos, upperBound, lowerBound) {
    return (isOutofBounds(detectorPos, upperBound, lowerBound)) ? -velocity : velocity;
}

function overlap(detectorPosition, detectorWidth, particle1x, particle1Width) {

    if ((detectorPosition < (particle1x + particle1Width) &&
        particle1x < (detectorPosition + detectorWidth))) {
        return r.RED;
    } else {
        return r.WHITE;
    }
}

function draw() {

    const d1_color = overlap(detector1X, detectorWidth, field1x, field1Width);
    const d2_color = overlap(detector2X, detectorWidth, field2x, field2Width);
    const d3_color = overlap(detectorY, detectorWidth, fieldY, field3Width);

    r.BeginDrawing();
    r.ClearBackground(r.BLACK)

    r.DrawRectangle(field1x, 0, field1Width, screenHeight, r.BLUE);

    r.DrawRectangle(field2x, 0, field2Width, screenHeight, r.BLUE);

    r.DrawRectangle(0, fieldY, screenWidth, field3Width, r.BLUE);

    r.DrawRectangle(detector1X, 0, detectorWidth, screenHeight, d1_color);

    r.DrawRectangle(detector2X, 0, detectorWidth, screenHeight, d2_color);

    r.DrawRectangle(0, detectorY, screenWidth, detectorWidth, d3_color);

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