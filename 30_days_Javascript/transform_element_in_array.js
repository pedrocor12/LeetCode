/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const result_arr = new Array(arr.length);
    for(const index in arr){
        result_arr[index] = fn(arr[index], Number(index))
    }
    return result_arr
};


// Lessons to be taken from solving this problem :

// - Strategy pattern which is a behavioral design pattern:
// that allows the behavior of an object to be selected at runtime.
// -Functional programming , emphasizing immutability and pure functions.

// Time complexity O(n)
// Space complexity O(1)
