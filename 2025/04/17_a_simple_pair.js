// https://edabit.com/challenge/ZRTs8xSSsiurhHLEo

const simplePair = (arr, num) => {
    if (num == 0) { 
        return arr.indexOf(0) != -1 ? [arr[0], 0] : null;
    }
    let foundIndex
    arr = arr.filter(c => c != 0);
    for (let i = 0; i < arr.length; i++) {
        foundIndex = arr.indexOf(num / arr[i]);
        if (foundIndex != -1 && foundIndex != i) { 
            return [arr[i], arr[foundIndex]]; 
        }
    }
    return null;
}

const Test = require('../../test.js');
Test.assertSimilar(simplePair([1, 2, 3], 3), [1, 3])
Test.assertSimilar(simplePair([1, 2, 3], 6), [2, 3])
Test.assertSimilar(simplePair([1, 2, 3], 7), null)
Test.assertSimilar(simplePair([1, 2, 3, 6], 6), [1, 6])
Test.assertSimilar(simplePair([1, 2, 3, 4, 5, 6], 15), [3, 5])
Test.assertSimilar(simplePair([0, 0, 2], 4), null)
Test.assertSimilar(simplePair([0, 0, 2, 2], 4), [2, 2])
Test.assertSimilar(simplePair([-3, -2, -2, -1, 0, 1, 2, 3, 4], 4), [-2, -2])
Test.assertSimilar(simplePair([-3, -2, -2, -1, 0, 1, 2, 3, 4], 0), [-3, 0])
Test.assertSimilar(simplePair([-3, -2, -1, 0, 1, 2, 3, 4], 4), [1, 4])