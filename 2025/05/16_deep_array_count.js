// https://edabit.com/challenge/Aq9mrJ9FWyxWCpgLq
const count = (a, c) => Array.isArray(c) ? a + 1 + deepCount(c) : a + 1;
const deepCount = arr =>  arr.reduce(count, 0);

const Test = require('../../test.js')
Test.assertEquals(deepCount([1, 2, 3]), 3);
Test.assertEquals(deepCount(["x", "y", ["z"]]), 4);
Test.assertEquals(deepCount(["a", "b", ["c", "d", ["e"]]]), 7);
Test.assertEquals(deepCount([[1], [2], [3]]), 6);
Test.assertEquals(deepCount([[[[[[[[[]]]]]]]]]), 8);
Test.assertEquals(deepCount([null]), 1);
Test.assertEquals(deepCount([[]]), 1);
Test.assertEquals(deepCount([[undefined], [null, ["edabit"]], [0]]), 8);