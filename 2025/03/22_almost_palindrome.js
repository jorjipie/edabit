// https://edabit.com/challenge/rm5MSuzTPGr4t3X7h

function almostPalindrome(str) {
    let mismatchCount = 0;
    const halfway = Math.floor(str.length / 2);
    for (let i = 0; i < halfway; i++) {
        if (str[i] != str[str.length - i - 1]) { mismatchCount++; }
    }
    return mismatchCount == 1;
}

const Test = require('../../test.js');
Test.assertEquals(almostPalindrome("abcdcbg"), true)
Test.assertEquals(almostPalindrome("abccia"), true)
Test.assertEquals(almostPalindrome("abcdaaa"), false)
Test.assertEquals(almostPalindrome("gggfgig"), true)
Test.assertEquals(almostPalindrome("gggffff"), false)
Test.assertEquals(almostPalindrome("GIGGG"), true)
Test.assertEquals(almostPalindrome("ggggi"), true)
Test.assertEquals(almostPalindrome("ggggg"), false, 'Should return false if already palindrome.')
Test.assertEquals(almostPalindrome("gggfggg"), false, 'Should return false if already palindrome.')
Test.assertEquals(almostPalindrome("1234312"), false)