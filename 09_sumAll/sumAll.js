const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b))
        return "ERROR";
    if (a < 0 || b < 0)
        return "ERROR";

    // sum of arithmetic series
    let start = Math.min(a, b);
    let end = Math.max(a, b);
    let terms = end - start + 1;
    return (start + end) / 2 * terms;
};

// Do not edit below this line
module.exports = sumAll;
