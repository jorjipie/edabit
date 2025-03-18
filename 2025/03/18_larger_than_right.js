// https://edabit.com/challenge/LzmaSDaSTn7zSwe2d

const largerThanRight = arr => 
    arr.filter((v, i, a) =>  a.slice(i + 1).every(c => v > c));

const Test = require('../../test.js');
Test.assertSimilar(largerThanRight([3, 13, 11, 2, 1, 9, 5]), [13, 11, 9, 5])
Test.assertSimilar(largerThanRight([9, 8, 7, 6]), [9, 8, 7, 6])
Test.assertSimilar(largerThanRight([1, 2, 3, 4]), [4])
Test.assertSimilar(largerThanRight([5, 9, 8, 7]), [9, 8, 7])
Test.assertSimilar(largerThanRight([5, 5, 5, 5, 5]),[5])