
const mysteryFunc = str => 
    str.split('').map(c => (c.charCodeAt(0) - 96 + str.length % 2) % str.length);

const Test = require('../../test.js');
Test.assertSimilar(mysteryFunc("hello"), [4, 1, 3, 3, 1])
Test.assertSimilar(mysteryFunc("maybe"), [4, 2, 1, 3, 1])
Test.assertSimilar(mysteryFunc("hopeless"), [0, 7, 0, 5, 4, 5, 3, 3])
Test.assertSimilar(mysteryFunc("higher"), [2, 3, 1, 2, 5, 0])
Test.assertSimilar(mysteryFunc("movement"), [5, 7, 6, 5, 5, 5, 6, 4])