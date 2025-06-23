// https://edabit.com/challenge/fiXLsemkYTK9oKuDC

const Test = require('../../test.js');

/* A function that takes a number and returns a string with the number in expanded notation
   aka expanded form. */

const expand = num => {
    let arr = [], digit = 0, mod = 0;
    while (num > 0) {
        mod = num % 10;
        if (mod != 0) {
            arr.push(mod * 10 ** digit);
        }
        num = Math.floor(num / 10);
        digit++;
    }
    return arr.reverse().join(' + ');
};

Test.assertEquals(expand(13), "10 + 3")
Test.assertEquals(expand(86), "80 + 6")
Test.assertEquals(expand(17000000), "10000000 + 7000000")
Test.assertEquals(expand(420370022), "400000000 + 20000000 + 300000 + 70000 + 20 + 2")
Test.assertEquals(expand(70304), "70000 + 300 + 4")
Test.assertEquals(expand(9000000), "9000000")
Test.assertEquals(expand(5325), "5000 + 300 + 20 + 5")
Test.assertEquals(expand(2096039485293), "2000000000000 + 90000000000 + 6000000000 + 30000000 + 9000000 + 400000 + 80000 + 5000 + 200 + 90 + 3")
Test.assertEquals(expand(92093403034573), "90000000000000 + 2000000000000 + 90000000000 + 3000000000 + 400000000 + 3000000 + 30000 + 4000 + 500 + 70 + 3")