// https://edabit.com/challenge/W9TyA4At3HNYn4B5u
function twins(arr) {
    let rightSum = arr.slice(1).reduce((a, c) => a + c), leftSum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (rightSum == leftSum) { return i; }
        leftSum += arr[i];
        rightSum -= arr[i];
    }
}

const Test = require('../../test.js');
Test.assertEquals(twins([1, 2, 3, 4, 5, 5]), 4)
Test.assertEquals(twins([3, 3]), 1)
Test.assertEquals(twins([10, 20, 30, 5, 40, 50, 40, 15]), 5)
Test.assertEquals(twins([3, 4, 6, 7, 6]), 3)