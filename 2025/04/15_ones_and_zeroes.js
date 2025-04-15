//https://edabit.com/challenge/sasbE2MCNAtmEWeeq
const sameLength = str => 
    str[str.length - 1] == 0 
    && Array.from(str.matchAll(/(1+0+)/g))
        .map(c => c[0]).every(str => str.length / 2 == str.indexOf('0'));

const Test = require('../../test.js');
Test.assertEquals(sameLength('10'), true)
Test.assertEquals(sameLength('1010'), true)
Test.assertEquals(sameLength('1100'), true)
Test.assertEquals(sameLength('10101110001100'), true)
Test.assertEquals(sameLength('1111000010101100'), true)

Test.assertEquals(sameLength('1001'), false)
Test.assertEquals(sameLength('101001'), false)
Test.assertEquals(sameLength('101'), false)
Test.assertEquals(sameLength('10010'), false)
Test.assertEquals(sameLength('110'), false)
Test.assertEquals(sameLength('11001'), false)
Test.assertEquals(sameLength('11100011000'), false)