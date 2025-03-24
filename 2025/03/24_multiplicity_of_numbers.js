// https://edabit.com/challenge/PgNvoxjjy7Gx6zDni

const multiplicity = arr => [...new Set(arr)].map(c => [c, arr.filter(j => j == c).length]);

const Test = require('../../test.js');
Test.assertSimilar(multiplicity([1, 1, 1, 2, 2, 3]), [[1, 3], [2, 2], [3, 1]])
Test.assertSimilar(multiplicity([1, 1, 1, 1, 1]), [[1, 5]])
Test.assertSimilar(multiplicity([1, 5, 4, 3, 2]), [[1, 1], [5, 1], [4, 1], [3, 1], [2, 1]])
Test.assertSimilar(multiplicity([5, 5, 5, 5, 8]), [[5, 4], [8, 1]])
Test.assertSimilar(multiplicity([3, 3, 3, 0]), [[3, 3], [0, 1]])
Test.assertSimilar(multiplicity([1, 1, 2, 2, 3, 3, 4, 4]), [[1, 2], [2, 2], [3, 2], [4, 2]])
Test.assertSimilar(multiplicity([4, 4, 3, 3, 2, 2, 1, 1]), [[4, 2], [3, 2], [2, 2], [1, 2]])