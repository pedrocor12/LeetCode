var isAnagram = function(s, t) {
    //  If the length is not the same it can't be an anagram
    const isEqual = s.length === t.length;
    if (!isEqual) return false;

    // Running the function on both strings to check if it is true;
    return console.log(reorder(s)) === console.log(reorder(t)); 
};
// function to sort the strings in alphabetical order
const reorder = (str) => str
    .split('')                         
    .sort((a, b) => a.localeCompare(b)) // n * logn
    .join(''); 

/* Time complexity: O(nlogn) || Space complexity: O(n)

 */


// Run the function :
// console.log(isAnagram("anagram","nagaram"));