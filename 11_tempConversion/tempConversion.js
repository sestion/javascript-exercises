const convertToCelsius = function(f) {
    const zeroPoint = 32;
    const degreeSize = 5 / 9;
    const result = (f - zeroPoint) * degreeSize;
    return parseFloat(result.toFixed(1));
};

const convertToFahrenheit = function(c) {
    const zeroPoint = 32;
    const degreeSize = 9 / 5;
    const result = c * degreeSize + zeroPoint;
    return parseFloat(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
