
const screenWidth = 800;
const screenHeight = 400;

let scanner1X = 0;
let scanner1Direction = 1;

let scanner2X = (screenWidth * 0.5);
let scanner2Direction = 1;

let scannerY = 0;
let scanner3Direction = 1;

let scannerWidth = 30;
function moveScannerY() {
    let scannerYSpeed = 5;


    scannerY += scanner3Direction * scannerYSpeed;

    if (scannerY + scannerWidth >= (screenHeight)) {
        scannerY = (screenHeight) - scannerWidth;
        scanner3Direction = -1;
    }

    if (scannerY <= 0) {
        scannerY = 0;
        scanner3Direction = 1;
    }
}

function moveScanner1() {
    let scannerSpeed = 3;

    scanner1X += scanner1Direction * scannerSpeed;

    if (scanner1X + scannerWidth >= (screenWidth * 0.5)) {
        scanner1X = (screenWidth * 0.5) - scannerWidth;
        scanner1Direction = -1;
    }

    if (scanner1X <= 0) {
        scanner1X = 0;
        scanner1Direction = 1;
    }
}
function moveScanner2() {
    let scanner2Speed = 2.5;


    scanner2X += scanner2Direction * scanner2Speed;

    if (scanner2X <= screenWidth * 0.5) {
        scanner2X = screenWidth * 0.5;
        scanner2Direction = 1;
    }

    if (scanner2X + scannerWidth >= screenWidth) {
        scanner2X = screenWidth - scannerWidth;
        scanner2Direction = -1;
    }
}
function overlap(scannerPosition, scannerWidth, particle1x, particle1Width) {
    return (scannerPosition < (particle1x + particle1Width) && particle1x < (scannerPosition + scannerWidth));
}
module.exports = {
    overlap,
    moveScanner1,
    moveScanner2,
    moveScannerY,
}