/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const res = []

    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i], i)){
            res.push(arr[i])
        }
    }

    return res
    
};

// What did i learn with this question:


// Truthy and Falsy values in javascript
// imperative programming :
// a developer writes code that specifies the steps
// that the computer must take to accomplish the goal.
//
// Time complexity : O(n)
// Space complexity : O(1)
