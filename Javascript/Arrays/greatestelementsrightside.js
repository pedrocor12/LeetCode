/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var replaceElements = function(arr) {
    
    // Non-Optmial solution to the problem, 
    // can be optimised to O(n) , we simply checking the greatest adjencency and replacing
    // the current value if it is smaller
    for(let i = 0 ; i < arr.length; i++){
        for(let j = (i + 1); j < arr.length; j++){
            if(arr[j] > arr[i]) {
                arr[i] = arr[j]
            }
        }
    }
    // Simply to clean up and meet the requirement of the coding challenge,
    // as the first element will have the same value as index 1 we shift,
    // and we push(-1)
    arr.shift()
    arr.push(-1)
    return arr

    /* 
    Time complexity: O(n^2)
    Space complexity: 0(n)
     */    
};

/* To test the code :
arr = [17,18,5,4,6,1]
console.log(replaceElements(arr)) */


