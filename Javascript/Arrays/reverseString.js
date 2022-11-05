
const string = "est est";

// * Optimal solution
const reverse = (string) => {
    // Turning the string into an array and separating by the spaces
    const arrayStrings = string.split('');
    console.log(arrayStrings);
    // Reversing the array of the strings
    arrayStrings.reverse();
    // Turning the array into a string again
    return arrayStrings.join('');

    //or return str.string('').reverse().join('')
    //or const reverse = str => str.split('').reverse().join('');
}

// Another way of reversing the string not really efficient
const reverse2 = (str) => {
    //checking the input to be sure that we have string 
    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'meh';
    }
    // Creating the array for the answer
    // and getting the totalnumber of items from the word
    const backwards = [];
    const totalItems = str.length - 1;

    // As we are going backwards in the words and pushing to the array
    // it will stop when it gets to 0 length 
    for(let i = totalItems; i>=0 ; i--){
        backwards.push(str[i]);
    }

    // returnign the reverse words since the spaces are already part
    // of the array i don't need to specify
    return backwards.join('');
    
}