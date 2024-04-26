/*
    https://edabit.com/challenge/fWkrdJb6EJrHsP7Sm
*/
const charAtPos = (arr, which) => {
    let joinNeeded = false;
    if (!Array.isArray(arr)) {
        arr = arr.split('');
        joinNeeded = true;
    }
    arr = which == "odd" 
        ? arr.filter((e, i) =>  !(i & 1)) 
        : arr.filter((e, i) => i & 1);
    
     return joinNeeded ? arr.join('') : arr;
};


console.log(charAtPos([2, 4, 6, 8, 10], "even")); // [4, 8]
console.log(charAtPos("EDABIT", "odd"));// "EAI"