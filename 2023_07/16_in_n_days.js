/*
    https://edabit.com/challenge/fLDHdMhmaNEd528wB
*/
const weekdays = 
    ['Sunday', 
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday'];

const afterNDays = (arr, shift) => 
    arr.map(day => weekdays[(weekdays.indexOf(day) + shift) % 7]);

console.log(afterNDays(["Saturday","Wednesday","Wednesday"], 10));
//  ["Tuesday", "Saturday","Saturday"]