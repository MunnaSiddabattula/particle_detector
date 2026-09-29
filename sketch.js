const r = require("raylib");
const d = require("./scanner.js")
const d1 = require("./d1.js")
const d3 = require("./d3.js")
const d2 = require("./d2.js")
const w = require("./window.js")
const f1 = require("./field.js")
const f2 = require("./field2.js")
const f3 = require("./field3.js")

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(w.width, w.height, "particle detector");
    r.SetTargetFPS(w.FPS);
}

function update() {
    const s1Boundary = w.width * 0.5;
    const s2Boundary = w.width;
    d1.velocity = d.calcVelocity(d1.velocity, d1.x, s1Boundary, 0, d1.width);
    d2.velocity = d.calcVelocity(d2.velocity, d2.x, s2Boundary, s1Boundary, d2.width);
    d3.velocity = d.calcVelocity(d3.velocity, d3.x, w.height, 0, d3.width);

    d1.x = d.calcPosition(d1.x, d1.velocity);
    d2.x = d.calcPosition(d2.x, d2.velocity);
    d3.x = d.calcPosition(d3.x, d3.velocity);
}



function draw() {

    r.BeginDrawing();
    r.ClearBackground(r.BLACK)

    r.DrawRectangle(f1.pos, 0, f1.width, w.height, r.BLUE);

    r.DrawRectangle(f2.pos, 0, f2.width, w.height, r.BLUE);

    r.DrawRectangle(0, f3.pos, w.width, f3.width, r.BLUE);



    r.DrawRectangle(d1.x, 0, d1.width, w.height, d.chooseColor(d1.x, d1.width, f1.pos, f1.width));

    r.DrawRectangle(d2.x, 0, d2.width, w.height, d.chooseColor(d2.x, d2.width, f2.pos, f2.width));

    r.DrawRectangle(0, d3.x, w.width, d3.width, d.chooseColor(d3.x, d3.width, f3.pos, f3.width));

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