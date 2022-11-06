// Brute Force method 
var twoSum = function(nums, target) {
    
    /* The current value and the adjacent add to the target ?
       -if so we return their indices
       -if not -1
     */
    for(let i = 0; i < nums.length - 1; i++) {
        for(let j = (i + 1); j < nums.length; j++){
            if(nums[i] + nums[j] === target) {
                return [i,j]
            }
    
        }
    }

    return [ -1, -1];

    /* Time complexity: O(n^2) || 
       Space complexity: O(n)
    */
    
};

// Run the function :
// console.log(twoSum([3,0],6))