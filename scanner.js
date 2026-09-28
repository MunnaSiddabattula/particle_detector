const scannerWidth = 30;

function moveScanner(scannerPos, max, min) {


    if (scannerPos + scannerWidth === max) {
        direction = -1;
    }
    if (scannerPos === min) {
        direction = 1;
    }
    return scannerPos += direction;
}



module.exports = {
    moveScanner,
}