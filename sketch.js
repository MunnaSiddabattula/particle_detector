const r = require("raylib");
const d = require("./scanner.js")
const d1 = require("./d1.js")
const d3 = require("./d3.js")
const d2 = require("./d2.js")
const screenWidth = 800;
const screenHeight = 400;
const FPS = 60;

const field1Width = 50;
const field1x = (screenWidth * 0.5) - field1Width;

const field2x = (screenWidth * 0.70);
const field2Width = 20;

const fieldY = 100;
const field3Width = 10;

let d2_x = screenWidth / 2;

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
    d1.velocity = d.calcVelocity(d1.velocity, d1.x, s1Boundary, 0, d1.width);
    d2.velocity = d.calcVelocity(d2.velocity, d2_x, s2Boundary, s1Boundary, d2.width);
    d3.velocity = d.calcVelocity(d3.velocity, d3.x, screenHeight, 0, d3.width);

    d1.x = d.calcPosition(d1.x, d1.velocity);
    d2_x = d.calcPosition(d2_x, d2.velocity);
    d3.x = d.calcPosition(d3.x, d3.velocity);
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

    const d1_color = overlap(d1.x, d1.width, field1x, field1Width);
    const d2_color = overlap(d2_x, d2.width, field2x, field2Width);
    const d3_color = overlap(d3.x, d3.width, fieldY, field3Width);

    r.BeginDrawing();
    r.ClearBackground(r.BLACK)

    r.DrawRectangle(field1x, 0, field1Width, screenHeight, r.BLUE);

    r.DrawRectangle(field2x, 0, field2Width, screenHeight, r.BLUE);

    r.DrawRectangle(0, fieldY, screenWidth, field3Width, r.BLUE);

    r.DrawRectangle(d1.x, 0, d1.width, screenHeight, d1_color);

    r.DrawRectangle(d2_x, 0, d2.width, screenHeight, d2_color);

    r.DrawRectangle(0, d3.x, screenWidth, d3.width, d3_color);

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