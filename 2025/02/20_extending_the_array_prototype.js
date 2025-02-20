// https://edabit.com/challenge/NDRSf8SFHz3rHS4Qm

Array.prototype.square = () => this.map(c => c ** 2);
Array.prototype.cube = () => this.map(c => c ** 3);
Array.prototype.divisible_by = x => this.filter(c => c % x == 0);
Array.prototype.strictly_above = x => this.filter(c => c > x);
Array.prototype.strictly_below = x => this.filter(c => c < x);

const Test = require('../../test.js');
Test.assertSimilar([1, 2, 3].square(), [1, 4, 9])
Test.assertSimilar([1, 2, 3].cube(), [1, 8, 27])
Test.assertSimilar([1, 2, 3, 4].divisible_by(2), [2, 4])
Test.assertSimilar([1, 2, 3, 4].strictly_above(1), [2, 3, 4])
Test.assertSimilar([1, 2, 3, 4].strictly_below(2), [1])

Test.assertSimilar([-2, -1, 0, 1].square(), [4, 1, 0, 1])
Test.assertSimilar([-2, -1, 0, 1].cube(), [-8, -1, 0, 1])
Test.assertSimilar([-2, -1, 0, 1].divisible_by(4), [0])
Test.assertSimilar([-2, -1, 0, 1].strictly_above(-1), [0, 1])
Test.assertSimilar([-2, -1, 0, 1].strictly_below(1), [-2, -1, 0])