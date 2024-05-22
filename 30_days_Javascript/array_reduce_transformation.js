/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let initial_value = init

    for(const i in nums){
        initial_value = fn(initial_value, nums[i])
        console.log(initial_value)
    }

    return initial_value
    
};

// What did i learn with this question:
// -Higher order functions :  function that accepts functions as parameters and/or returns a function.
// - How to use higher-order functions to transform and reduce data
// in an array.
// - fn takes the accumulated value and the current element of the array.

// Time complexity : O(n)
// Space complexity : O(1)
