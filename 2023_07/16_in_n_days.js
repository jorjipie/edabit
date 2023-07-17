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

const shiftDay = (day, shift) => {
    let dayIndex = weekdays.indexOf(day);
    let newIndex = (dayIndex + shift) % 7;
    return weekdays[newIndex];
};
const afterNDays = (arr, shift) => 
    arr.map(day => shiftDay(day, shift));
    
console.log(afterNDays(["Saturday","Wednesday","Wednesday"], 10));
//  ["Tuesday", "Saturday","Saturday"]