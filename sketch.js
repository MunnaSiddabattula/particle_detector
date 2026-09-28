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

let scannerWidth = 30;



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

// function moveScannerY() {
//     let scannerYSpeed = 5;


//     scannerY += scanner3Direction * scannerYSpeed;

//     if (scannerY + scannerWidth >= (screenHeight)) {
//         scannerY = (screenHeight) - scannerWidth;
//         scanner3Direction = -1;
//     }

//     if (scannerY <= 0) {
//         scannerY = 0;
//         scanner3Direction = 1;
//     }
// }

// function moveScanner1() {
//     let scannerSpeed = 3;

//     scanner1X += scanner1Direction * scannerSpeed;

//     if (scanner1X + scannerWidth >= (screenWidth * 0.5)) {
//         scanner1X = (screenWidth * 0.5) - scannerWidth;
//         scanner1Direction = -1;
//     }

//     if (scanner1X <= 0) {
//         scanner1X = 0;
//         scanner1Direction = 1;
//     }
// }
// function moveScanner2() {
//     let scanner2Speed = 2.5;


//     scanner2X += scanner2Direction * scanner2Speed;

//     if (scanner2X <= screenWidth * 0.5) {
//         scanner2X = screenWidth * 0.5;
//         scanner2Direction = 1;
//     }

//     if (scanner2X + scannerWidth >= screenWidth) {
//         scanner2X = screenWidth - scannerWidth;
//         scanner2Direction = -1;
//     }
// }
// function overlap(scannerPosition, scannerWidth, particle1x, particle1Width) {
//     return (scannerPosition < (particle1x + particle1Width) && particle1x < (scannerPosition + scannerWidth));
// }

// function draw() {
//     const particle1Width = 50;
//     const particle1x = (screenWidth * 0.5) - particle1Width;

//     const particle2x = (screenWidth * 0.70);
//     const particle2Width = 20;

//     const particleY = 100;
//     const particleWidth = 10;

//     const detected1X = overlap(scanner1X, scannerWidth, particle1x, particle1Width);
//     const detected2X = overlap(scanner2X, scannerWidth, particle2x, particle2Width);
//     const detectedY = overlap(scannerY, scannerWidth, particleY, particleWidth);

//     r.BeginDrawing();
//     r.ClearBackground(r.BLACK)

//     r.DrawRectangle(
//         particle1x,
//         0,
//         particle1Width,
//         screenHeight,
//         r.BLUE);

//     r.DrawRectangle(
//         particle2x,
//         0,
//         particle2Width,
//         screenHeight,
//         r.BLUE
//     );



//     r.DrawRectangle(0,
//         particleY,
//         screenWidth,
//         particleWidth,
//         r.BLUE);
//     if (detectedY) {
//         r.DrawRectangle(
//             0,
//             scannerY,
//             screenWidth,
//             scannerWidth,
//             r.RED);
//     } else {
//         r.DrawRectangle(
//             0,
//             scannerY,
//             screenWidth,
//             scannerWidth,
//             r.WHITE);

//     }

//     if (detected1X) {
//         r.DrawRectangle(
//             scanner1X,
//             0,
//             scannerWidth,
//             screenHeight,
//             r.RED
//         );
//     } else {
//         r.DrawRectangle(
//             scanner1X,
//             0,
//             scannerWidth,
//             screenHeight,
//             r.WHITE);
//     }

//     if (detected2X) {
//         r.DrawRectangle(
//             scanner2X,
//             0,
//             scannerWidth,
//             screenHeight,
//             r.RED
//         );
//     } else {
//         r.DrawRectangle(
//             scanner2X,
//             0,
//             scannerWidth,
//             screenHeight,
//             r.WHITE);
//     }

//     r.EndDrawing();
// }

// function teardown() {
//     r.CloseWindow();
// }


// module.exports = {
//     running,
//     setup,
//     update,
//     draw,
//     teardown,

// };
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