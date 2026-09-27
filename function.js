const scannerWidth = 30;

function moveScanner(scannerPos, max, min) {
    // const screenWidth = 800;
    // let scanner1X = 0;
    // let scanner1Speed = 1;
    // let scanner2X = (screenWidth * 0.5);
    // let scanner2Speed = 2;
    // let scannerY = 0;
    // let scannerYSpeed = 3;


    if (scannerPos + scannerWidth === max) {
        direction = -1;
    }
    if (scannerPos === min) {
        direction = 1;
    }
}
//     if (scannerPos === scanner1X)
//         return scannerPos = scannerPos + (direction * scanner1Speed);
//     if (scannerPos === scanner2X)
//         return scannerPos = scannerPos + (direction * scanner2Speed);
//     if (scannerPos === scannerY)
//         return scannerPos = scannerPos + (direction * scannerYSpeed);
// }



function overlap(scannerPosition, scannerWidth, particle1x, particle1Width) {
    const r = require("raylib");

    if ((scannerPosition < (particle1x + particle1Width) && particle1x < (scannerPosition + scannerWidth))) {
        return r.RED;
    }
    return r.WHITE;
}
module.exports = {
    overlap,
    moveScanner,
}