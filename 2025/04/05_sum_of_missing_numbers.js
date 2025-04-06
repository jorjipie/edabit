// https://edabit.com/challenge/5X9SgidXaNf7pikbp

const sumOfMissingNums = arr => arr
    .filter(c => !isNaN(c))
    .map(c => parseInt(c))
    .sort((a, b) => a - b)
    .reduce((acc, curr, index, array) => 
        index > 0 ? acc + curr - array[index - 1] - 1 : 0, 0);

const Test = require('../../test.js');
Test.assertEquals(sumOfMissingNums(['1', '3', '5', '7', '9']), 4)
Test.assertEquals(sumOfMissingNums(['7', '3', '1', '9', '5']), 4)
Test.assertEquals(sumOfMissingNums(['10', '20', '30', '40', '50']), 36)
Test.assertEquals(sumOfMissingNums(['1', '78', 'B', '9', 'z']), 75)
Test.assertEquals(sumOfMissingNums(['95', '96', '97', '98', '99']), 0)
Test.assertEquals(sumOfMissingNums(['45', 'EDABIT', '56']), 10)