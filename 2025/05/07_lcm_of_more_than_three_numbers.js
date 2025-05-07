//https://edabit.com/challenge/qmQ9kRz6ZbkL4hi5F

const getGCD = (num1, num2) => 
    num2 ? getGCD(num2, num1 % num2) : Math.abs(num1);

const lcmOfTwo = (num1, num2) => 
    (num1 * num2) / getGCD(num1, num2);

const lcmOfArray = (arr) => {
    if (arr.length == 1) { return arr[0]; }
    arr.splice(arr.length - 2, 2, lcmOfTwo(arr[arr.length - 1], arr[arr.length - 2]))
    return lcmOfArray(arr);
}

const Test = require('../../test.js');
Test.assertSimilar(lcmOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 2520)
Test.assertSimilar(lcmOfArray([13, 6, 17, 18, 19,20, 37]), 27965340)
Test.assertSimilar(lcmOfArray([44, 64, 12, 17, 65]), 2333760)
Test.assertSimilar(lcmOfArray([200, 30, 18, 11, 8, 64, 34]), 2692800)

