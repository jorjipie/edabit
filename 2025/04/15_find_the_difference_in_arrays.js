// https://edabit.com/challenge/D5RD2zxsmykLg8GCE

const difference = (array, ...arrays) => {
    return array.filter(c => (arrays.every(arr => arr.indexOf(c) == -1)));
}

const Test = require('../../test.js');
Test.assertSimilar(difference([1,2,3], [2,3,4]), [1]);
Test.assertSimilar(difference(["cat", "dog", "boy"], ["cat", "dog"], ["aardvark", "camel"]), ["boy"]);
Test.assertSimilar(difference(["dragon", null, 9], ["sickle", "cardigan"], ["aardvark", "camel"], ['football', 'dragon']), [ null, 9]);