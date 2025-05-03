// https://edabit.com/challenge/WMorR7e2z3AkoesJC

const straightDigital = num => {
    if (num < 100) { return "Not Straight"; }
    const arr = (''+num).split('').map(c => +c);
    const diff = arr[1] - arr[0];
    const test = arr.every((e, i, a) => i == 0 || diff == e - a[i - 1]);
    if(test && diff == 0) { return "Trivial Straight"; }
    if(test) { return diff; }
    return "Not Straight";
}

const Test = require('../../test.js');
Test.assertEquals(straightDigital(123), 1, "Example #1")
Test.assertEquals(straightDigital(753), -2, "Example #2")
Test.assertEquals(straightDigital(666), "Trivial Straight", "Example #3")
Test.assertEquals(straightDigital(124), "Not Straight", "Example #4")
Test.assertEquals(straightDigital(99), "Not Straight", "Example #5")
Test.assertEquals(straightDigital(13579), 2)
Test.assertEquals(straightDigital(111111), "Trivial Straight")
Test.assertEquals(straightDigital(9630), -3)
Test.assertEquals(straightDigital(-123456789), "Not Straight")
Test.assertEquals(straightDigital(951), -4)
Test.assertEquals(straightDigital(24642), "Not Straight")
Test.assertEquals(straightDigital(147), 3)
Test.assertEquals(straightDigital(13579), 2)
Test.assertEquals(straightDigital(9876543210), -1)
Test.assertEquals(straightDigital(1313), "Not Straight")