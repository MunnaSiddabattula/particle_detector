const r = require("raylib");

function isOutofBounds(detectorPos, upperBound, lowerBound, width) {
    return (detectorPos + width >= upperBound) || (detectorPos < lowerBound);
}

function calcVelocity(velocity, detectorPos, upperBound, lowerBound, width) {
    return (isOutofBounds(detectorPos, upperBound, lowerBound, width)) ? -velocity : velocity;
}

function calcPosition(pos, velocity) {
    return pos + velocity;
}

function particleDetected(detectorPosition, detectorEnd, particle1x, particleEnd) {
    return ((detectorPosition < particleEnd && particle1x < detectorEnd))
}

function chooseColor(detectorPos, detectorWidth, field, fieldWidth) {
    const particleEnd = field + fieldWidth;
    const detectorEnd = detectorPos + detectorWidth;

    return particleDetected(detectorPos, detectorEnd, field, particleEnd) ? r.RED : r.WHITE
}
module.exports = {
    calcVelocity,
    calcPosition,
    chooseColor,
}