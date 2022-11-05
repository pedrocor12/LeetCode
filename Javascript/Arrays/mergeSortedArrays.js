function mergeSortedArrays(array1, array2) {
    // Checking the input
    if (array1.length === 0) {
        return array2;
    }
    if (array2.length === 0) {
        return array2;
    }
    // array which is going to hold the solution
    const merged = []

    // Pushing the items of the arrays into the new one
    for(i of array1){
        merged.push(i)
    }

    for(j of array2){
        merged.push(j)
    }

    // Sorting the merged array 
    merged.sort((a,b) => {
        return a - b;
    });

    return merged

}

function mergeSortedArrays2(array1,array2) {
    const mergeArray = [];
    let array1Item = array1[0]; // 0
    let array2Item = array2[0]; // 4

    /* We start i and j with 1 , so the first element of both arrays 
    is not repeated
    */
    let i = 1;
    let j = 1;

    // Checking for the input given
    if (array1.length === 0) {
        return array2;
    }
    if (array2.length === 0) {
        return array2;
    }
    
    // Until the arrays have elements it will keep running
    while(array1Item || array2Item) {

        /* The while loop will keep running as the arrays are populated
            -if the item of the arrayi is smaller we push , however,
            we are also checking for the case of the second array being undefined
            -else we push the item of the second array
            -the counter is increased for both cases of the if-else */
        if(!array2Item || array1Item < array2Item) {
            mergeArray.push(array1Item);
            array1Item = array1[i]; 
            i++ // 
        } else {
            mergeArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }

    return mergeArray;


}

//Runnign first solution
//console.log(mergeSortedArrays([0,3,4,31],[4,6,30]));

//Running second way of the solution
//console.log(mergeSortedArrays2([0,3,4,31],[4,6,30]));

// Time complexity - O(n) , for both solutions