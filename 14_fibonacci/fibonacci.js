const fibonacci = function(num) {
    let x = Number.parseInt(num);
    
    if (Number.isNaN(x) || x < 0) return "OOPS";
    if (x === 0) return 0;
    
    let curr = 1;
    let prev = 0;
    for (let i = 1; i < x; i++) {
        let temp = curr;
        curr += prev;
        prev = temp;
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
