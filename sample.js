const r = require("raylib");
const screenWidth = 600;
const screenHeight = 400;

r.InitWindow(screenWidth, screenHeight, "Particle Detector");
r.SetTargetFPS(60);

// Scanner 1
let scanner1Position = 0;
let scanner1Width = 30;
let scanner1Direction = 1;
let scanner1Speed = 1;

// Scanner 2
let scanner2Position = 300;
let scanner2Width = 30;
let scanner2Direction = 1;
let scanner2Speed = 2;

// Particle field 1
let field1Start = 100;
let field1Width = 50;

// Particle field 2
let field2Start = 400;
let field2Width = 40;


function overlaps(start1, end1, start2, end2) {
    return start1 < end2 && start2 < end1;
}


function moveScanner(position, direction, width, minX, maxX, speed) {
    position = position + direction * speed;

    if (position <= minX) {
        position = minX;
        direction = 1;
    }

    if (position + width >= maxX) {
        position = maxX - width;
        direction = -1;
    }

    return [position, direction];
}


while (!r.WindowShouldClose()) {
    // Move scanner 1
    let result1 = moveScanner(
        scanner1Position,
        scanner1Direction,
        scanner1Width,
        0,
        screenWidth / 2,
        scanner1Speed
    );

    scanner1Position = result1[0];
    scanner1Direction = result1[1];


    // Move scanner 2
    let result2 = moveScanner(
        scanner2Position,
        scanner2Direction,
        scanner2Width,
        screenWidth / 2,
        screenWidth,
        scanner2Speed
    );

    scanner2Position = result2[0];
    scanner2Direction = result2[1];


    // Scanner 1 range
    let scanner1Start = scanner1Position;
    let scanner1End = scanner1Position + scanner1Width;

    // Scanner 2 range
    let scanner2Start = scanner2Position;
    let scanner2End = scanner2Position + scanner2Width;

    // Particle field ranges
    let field1End = field1Start + field1Width;
    let field2End = field2Start + field2Width;


    // Detect particles
    let scanner1Detected =
        overlaps(scanner1Start, scanner1End, field1Start, field1End) ||
        overlaps(scanner1Start, scanner1End, field2Start, field2End);

    let scanner2Detected =
        overlaps(scanner2Start, scanner2End, field1Start, field1End) ||
        overlaps(scanner2Start, scanner2End, field2Start, field2End);


    r.BeginDrawing();

    r.ClearBackground(r.BLACK);


    // Particle field 1
    r.DrawRectangle(
        field1Start,
        0,
        field1Width,
        screenHeight,
        r.BLUE
    );


    // Particle field 2
    r.DrawRectangle(
        field2Start,
        0,
        field2Width,
        screenHeight,
        r.BLUE
    );


    // Scanner 1
    if (scanner1Detected) {
        r.DrawRectangle(
            scanner1Position,
            0,
            scanner1Width,
            screenHeight,
            r.RED
        );
    }
    else {
        r.DrawRectangle(
            scanner1Position,
            0,
            scanner1Width,
            screenHeight,
            r.WHITE
        );
    }


    // Scanner 2
    if (scanner2Detected) {
        r.DrawRectangle(
            scanner2Position,
            0,
            scanner2Width,
            screenHeight,
            r.RED
        );
    }
    else {
        r.DrawRectangle(
            scanner2Position,
            0,
            scanner2Width,
            screenHeight,
            r.WHITE
        );
    }


    // Middle dividing line
    r.DrawLine(
        screenWidth / 2,
        0,
        screenWidth / 2,
        screenHeight,
        r.GRAY
    );


    r.EndDrawing();
}

r.CloseWindow();