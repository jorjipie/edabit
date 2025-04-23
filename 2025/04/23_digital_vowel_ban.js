// https://edabit.com/challenge/xE7TGwocj5YvnftCH
const Test = require('../../test.js');

const digitalVowelBan = (num, vowel) => {
    const digitWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const unbanned = 
        +((''+num).split('')
        .filter(digit => digitWords[+digit].indexOf(vowel) == -1)
        .join(''))
    return unbanned == 0 ? 'Banned Number' : unbanned;
}

Test.assertEquals(digitalVowelBan(143, "o"), 3, "Example #1")
Test.assertEquals(digitalVowelBan(14266330, "e"), 4266, "Example #2")
Test.assertEquals(digitalVowelBan(4020, "u"), 20, "Example #3")
Test.assertEquals(digitalVowelBan(586, "i"), "Banned Number", "Example #4")
Test.assertEquals(digitalVowelBan(123456789, "i"), 12347)
Test.assertEquals(digitalVowelBan(20442, "o"), "Banned Number")
Test.assertEquals(digitalVowelBan(1100, "u"), 1100)
Test.assertEquals(digitalVowelBan(1993, "e"), "Banned Number")
Test.assertEquals(digitalVowelBan(90160350102, "e"), 62)
Test.assertEquals(digitalVowelBan(79284426, "o"), 7986)
Test.assertEquals(digitalVowelBan(123456789, "a"), 123456789, "triviAl test")