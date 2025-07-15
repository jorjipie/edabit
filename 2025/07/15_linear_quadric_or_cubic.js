// https://edabit.com/challenge/N7p2XeHgkXejEgoap

/* This function determines whether a given array is linear, quadratic, or cubic,
    and outputs the result as a string. The array must be sorted. It references 
    DifArr, which returns an array that shows the difference between items in the
    given array.
*/
const seqLevel = arr => {
    const linArr = DifArr(arr);
    if ((new Set(linArr)).size == 1) { return "Linear"; }
    const quadArr = DifArr(linArr);
    if ((new Set(quadArr)).size == 1) { return "Quadratic"; }
    const cubeArr = DifArr(quadArr);
    if ((new Set(cubeArr)).size == 1) { return "Cubic"; }
};

const DifArr = arr => {
    let newArr = new Array(arr.length - 1);
    for (let i = 1; i < arr.length; i++) {
        newArr[i-1] = arr[i] - arr[i-1];
    }
    return newArr;
}

const Test = require('../../test.js');
Test.assertEquals(seqLevel([1, 2, 3, 4, 5]), "Linear")
Test.assertEquals(seqLevel([2, 1, 0, -1, -2]), "Linear")
Test.assertEquals(seqLevel([3, 6, 10, 15, 21]), "Quadratic")
Test.assertEquals(seqLevel([4, 9, 16, 25, 36]), "Quadratic")
Test.assertEquals(seqLevel([7, 17, 31, 49, 71]), "Quadratic")
Test.assertEquals(seqLevel([2, 10, 26, 50, 82]), "Quadratic")
Test.assertEquals(seqLevel([-6, -4, 10, 42, 98, 184]), "Cubic")
Test.assertEquals(seqLevel([17, 59, 143, 287, 509, 827]), "Cubic")