// https://edabit.com/challenge/p74GFxJkNQRRbLTwG

const bugger = num =>  num < 10 
    ? 0 
    : 1 + bugger((''+num).split('').map(c => +c).reduce((a, c) => a * c, 1)); 

const Test = require('../../test.js');
Test.assertEquals(bugger(39),3)
Test.assertEquals(bugger(4),0)
Test.assertEquals(bugger(25),2)
Test.assertEquals(bugger(999),4)