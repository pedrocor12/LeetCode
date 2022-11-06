var containsDuplicates = nums => {

   for(let i = 0; i < nums.length - 1; i++){
    for(let j = i + 1; j < nums.length; j++){
        if(nums[i] === nums[j]){
            return true;
        }
    }

   } return false;
   
   /* Time complexity : O(n^2)
    This is the brute force solution which is far from optimal.
    Explanation :
        i = current element , j = adjacent element 
        we compare the i to its adjancent to know if there are duplicates
        */
}

// Optimal - Solution
const containsDuplicates2 = function(nums) {
    const set = new Set(nums);

    return set.size !== nums.length 

    // Time complexity : O(n)
    // As we are iterating of the numbers on the Set operation
}



// TO run the function:
// containsDuplicates([1,2,4,3,5,6,7]);