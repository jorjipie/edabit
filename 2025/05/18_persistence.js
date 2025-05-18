// https://edabit.com/challenge/hLZPoBBa745aWAsnm

const multiplyNum = num => {
    let product = 1;
    while (num > 9) {
        product *= num % 10;
        num = Math.floor(num / 10);
    }
    return product * num;
}

const persistence = num => num < 10 ? 0 : persistence(multiplyNum(num)) + 1;

const Test = require('../../test.js');
Test.assertEquals(multiplyNum(347), 84)
Test.assertEquals(persistence(0), 0)
Test.assertEquals(persistence(10), 1)
Test.assertEquals(persistence(25), 2)
Test.assertEquals(persistence(39), 3)
Test.assertEquals(persistence(77), 4)
Test.assertEquals(persistence(679), 5)
Test.assertEquals(persistence(6788), 6)
Test.assertEquals(persistence(68889), 7)
Test.assertEquals(persistence(2677889), 8)
Test.assertEquals(persistence(26888999), 9)
Test.assertEquals(persistence(3778888999), 10)
Test.assertEquals(persistence(277777788888899), 11)