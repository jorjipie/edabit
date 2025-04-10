// https://edabit.com/challenge/GZkdz9WEeHSBy2ScE

const isUban = num => !(num % 10 == 4 
    || num > 99 && num < 1000000 
    || num % 1000000 > 99);

const Test = require('../../test.js');

Test.assertEquals(isUban(0), true)
Test.assertEquals(isUban(24), false)
Test.assertEquals(isUban(223), false)
Test.assertEquals(isUban(2051), false)
Test.assertEquals(isUban(627), false)
Test.assertEquals(isUban(6258), false)
Test.assertEquals(isUban(12), true)
Test.assertEquals(isUban(202), false)
Test.assertEquals(isUban(98), true)
Test.assertEquals(isUban(6592), false)
Test.assertEquals(isUban(393), false)
Test.assertEquals(isUban(1000096), true)
Test.assertEquals(isUban(40), true)