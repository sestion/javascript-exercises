const palindromes = function (str) {
    let regex = /[a-z0-9]/;
    let sanitize = Array.from(str.toLowerCase()).filter((x) => regex.test(x));

    let a = sanitize.join("");
    let b = [...a].reverse().join("");

    return a === b;
};

// Do not edit below this line
module.exports = palindromes;
