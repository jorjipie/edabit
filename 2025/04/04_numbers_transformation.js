// https://edabit.com/challenge/mrteErHiwHpWGo2vo

function numberTransform(n, m) {
    if (n == m) { return 0; }
    let steps = 0;
    if (n & 1 && n > 1) { 
        n = (n - 1) / 2;
        steps++;
    }
    while (n > m) {
        n /= 2;
        steps++;
    }
    while (n < m) {
        n *= 2;
        steps++;
    }
    return steps; 
}

const Test = require('../../test.js');
Test.assertEquals(numberTransform(1, 1), 0)
Test.assertEquals(numberTransform(2, 4), 1)
Test.assertEquals(numberTransform(3, 8), 4)
Test.assertEquals(numberTransform(4, 16), 2)
Test.assertEquals(numberTransform(4, 1), 2)
Test.assertEquals(numberTransform(1, 4), 2)
Test.assertEquals(numberTransform(1024, 1024), 0)
Test.assertEquals(numberTransform(2048, 1024), 1)
Test.assertEquals(numberTransform(2048, 2), 10)
Test.assertEquals(numberTransform(4096, 2), 11)
Test.assertEquals(numberTransform(4096, 1), 12)