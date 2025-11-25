const removeFromArray = function (arr, ...args) {
    let filtered = arr;
    for (const arg of args) {
        filtered = filtered.filter((x) => x !== arg);
    }
    return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;
