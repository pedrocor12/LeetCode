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


var replaceElements2 = function(arr){
    // As we know that the last element will be -1
    let max = -1;

    /* Starting from the end of the arry as we know the last value
       has to be -1 and we use the curr variable of the current
       element , Keeping in mind that the greatest element
       is always on the right side, on the following loop we always
       change the current element to the max element.
    */
    for (let i = arr.length - 1; i >= 0; i--) {
        const curr = arr[i];
        arr[i] = max;
        console.log(arr[i])
        max = Math.max(max,curr);
        
    }

    return arr;

    /*
      Time complexity = O(n)
      Space complexity = 0(1)
      */

}

arr = [17,18,5,4,6,1]
console.log(replaceElements2(arr))
