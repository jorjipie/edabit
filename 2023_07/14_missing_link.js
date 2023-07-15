/*
    https://edabit.com/challenge/M6hcm6ezCoRBbANQr
*/
const diffsArr = arr => {
    let diff = new Array(arr.length - 1);
    for (let i = 0; i < arr.length - 1; i++) {
        diff[i] = arr[i+1] - arr[i];
    }
    return diff;
}
const missing = arr => {
    let diff = diffsArr(arr);
    return arr[diff.indexOf(Math.max(...diff))+1] - Math.min(...diff);
}
console.log(missing([12, 15, 18, 21, 24, 30, 33]));