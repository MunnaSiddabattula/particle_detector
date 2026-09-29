function isOutofBounds(detectorPos, upperBound, lowerBound, width) {
    return (detectorPos + width >= upperBound) || (detectorPos < lowerBound);
}

function calcVelocity(velocity, detectorPos, upperBound, lowerBound, width) {
    return (isOutofBounds(detectorPos, upperBound, lowerBound, width)) ? -velocity : velocity;
}
function calcPosition(pos, velocity) {
    return pos + velocity;
}
module.exports = {
    calcVelocity,
    calcPosition,
}