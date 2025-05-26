// https://edabit.com/challenge/srfpEfnmYdWwMcqv4

const castOutNines = (a, b, r) => {
    const drA = DR(a), drB = DR(b), drR = DR(r),drProduct = DR(drA * drB);
    const response = drR == drProduct ? a * b == r ?
        "Correct!" : "False positive!" : "Wrong!";
    return `${drA},${drB},${drR},${drProduct} = ${response}`;
};

const DR = num => {
    let result = 0;
    while (num > 0) {
        result += num % 10;
        num = Math.floor(num / 10);
    }
    return result < 10 ? result : DR(result);
};

const Test = require('../../test.js');
Test.assertEquals(castOutNines(467, 78, 36426), "8,6,3,3 = Correct!", "Example #1")
Test.assertEquals(castOutNines(467, 78, 36425), "8,6,2,3 = Wrong!", "Example #2")
Test.assertEquals(castOutNines(467, 78, 129), "8,6,3,3 = False positive!", "Example #3")
Test.assertEquals(castOutNines(9, 9, 81), "9,9,9,9 = Correct!")
Test.assertEquals(castOutNines(9, 9, 666), "9,9,9,9 = False positive!")
Test.assertEquals(castOutNines(9, 9, 51), "9,9,6,9 = Wrong!")
Test.assertEquals(castOutNines(59714, 24339, 1453379046), "8,3,6,6 = Correct!")
Test.assertEquals(castOutNines(59714, 24339, 153379046), "8,3,2,6 = Wrong!")
Test.assertEquals(castOutNines(1902, 1964,  3735519), "3,2,6,6 = False positive!")
Test.assertEquals(castOutNines(12986, 4320, 56099520), "8,9,9,9 = Correct!")
Test.assertEquals(castOutNines(12986, 4320, 56099529), "8,9,9,9 = False positive!")
Test.assertEquals(castOutNines(12986, 4320, 56099521), "8,9,1,9 = Wrong!")
Test.assertEquals(castOutNines(123, 456, 789), "6,6,6,9 = Wrong!")
Test.assertEquals(castOutNines(123, 456, 999), "6,6,9,9 = False positive!")