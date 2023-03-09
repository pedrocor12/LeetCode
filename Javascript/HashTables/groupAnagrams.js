var groupAnagrams = function(strs) {

    let arr = []
    for(i of strs){
        console.log(i)
        reorder(i)
        console.log(i)
        arr.push(i)
    }

    return arr;
};

const reorder = (str) => {
    str.split('').sort((a, b) => a.localeCompare(b)).join(''); 
}

let str = ['ate','tae']

groupAnagrams(str)

console.log(str)


