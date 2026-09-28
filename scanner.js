const scannerWidth = 30;
const screenWidth = 800;

function moveScanner(scannerPos, max, min, direction) {
    let scannerSpeed = 3;

    if (scannerPos + scannerWidth >= (max)) {
        scannerPos = (max) - scannerWidth;
        direction = -1;
    }

    if (scannerPos <= min) {
        scannerPos = min;
        direction = 1;
    }
    return scannerPos += direction * scannerSpeed;
}
function moveScanner1(scanner1X, max, min) {
    let scannerSpeed = 3;



    if (scanner1X + scannerWidth >= max) {
        scanner1X = max - scannerWidth;
        scanner1Direction = -1;
    }

    if (scanner1X <= min) {
        scanner1X = min;
        scanner1Direction = 1;
    }
    scanner1X += scanner1Direction * scannerSpeed;
}


module.exports = {
    moveScanner,
    moveScanner1,
}

function overlap(scannerPosition, scannerWidth, particle1x, particle1Width) {

    if ((scannerPosition < (particle1x + particle1Width) && particle1x < (scannerPosition + scannerWidth))) {
        return r.RED;
    }
    return r.WHITE;
}