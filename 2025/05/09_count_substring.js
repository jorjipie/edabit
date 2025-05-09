// https://edabit.com/challenge/Q4jq2bky3TdCe8J3M

const countSubstring = str => {
    const arr = str.split('');
    const xIndexes = arr.map((c, i) => c == 'X' ? i : null).filter(c => c != null);
    return arr.reduce((a, c, i) => c == 'A' ? a + xIndexes.filter(j => j > i).length : a, 0);
}

const Test = require('../../test.js');
Test.assertEquals(countSubstring("CAXAAYXZA"), 4)
Test.assertEquals(countSubstring("AAXOXXA"), 6)
Test.assertEquals(countSubstring("AXAXAXAXAX"), 15)