/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let result = n - 1;
    return function() {
        result += 1;
        return result;
    };
};

