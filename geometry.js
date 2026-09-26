const screenWidth = 800;

let scannerDirection = 1;
let scannerSpeed = 5;
let scanner2Speed = 2;

let scanner1X = 0;
let scanner2X = (screenWidth * 0.5);

function moveScanner1(scannerWidth) {

    scanner1X += scannerDirection * scannerSpeed;

    if (scanner1X + scannerWidth >= (screenWidth * 0.5)) {
        scanner1X = (screenWidth * 0.5) - scannerWidth;
        scannerDirection = -1;
    }

    if (scanner1X <= 0) {
        scanner1X = 0;
        scannerDirection = 1;
    }
}
function moveScanner2(scannerWidth) {

    scanner2X += scannerDirection * scanner2Speed;

    if (scanner2X + scannerWidth >= screenWidth) {
        scanner2X = screenWidth - scannerWidth;
        scannerDirection = -1;
    }

    if (scanner2X <= 0) {
        scanner2X = 0;
        scannerDirection = 1;
    }
}
function overlap(scannerPosition, scannerWidth, particle1x, particle1Width) {
    return (scannerPosition < (particle1x + particle1Width) && particle1x < (scannerPosition + scannerWidth));
}
module.exports = {
    moveScanner1,
    moveScanner2,
    overlap,
}