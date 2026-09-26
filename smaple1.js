const r = require("raylib");

const screenWidth = 600;
const screenHeight = 400;

r.InitWindow(screenWidth, screenHeight, "Particle Detector");
r.SetTargetFPS(60);

let scannerPosition = 0;
let scannerWidth = 30;
let scannerDirection = 1;
let scannerSpeed = 2;

while (!r.WindowShouldClose()) {
    // Move scanner
    scannerPosition += scannerDirection * scannerSpeed;

    // Right edge
    if (scannerPosition + scannerWidth >= screenWidth) {
        scannerPosition = screenWidth - scannerWidth;
        scannerDirection = -1;
    }

    // Left edge
    if (scannerPosition <= 0) {
        scannerPosition = 0;
        scannerDirection = 1;
    }

    r.BeginDrawing();

    r.ClearBackground(BLACK);

    // Scanner
    r.DrawRectangle(
        scannerPosition,
        0,
        scannerWidth,
        screenHeight,
        WHITE
    );

    r.EndDrawing();
}

r.CloseWindow();