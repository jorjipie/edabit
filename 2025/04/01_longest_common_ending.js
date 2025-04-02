// https://edabit.com/challenge/FGuBhmmvXgkvvTQHc

function longestCommonEnding(str1, str2) {
    let shortestWord = 
        (str1.length < str2.length ? str1.length : str2.length) + 2;
    let match = 0;
    for (let i = 1; i < shortestWord; i++) {
        if (str1[str1.length - i] == str2[str2.length - i]) { match = i }
        else if (i == 1) { return ''; }
        else { return str1.substring(str1.length - i + 1); }
    }
}
const Test = require('../../test.js');
Test.assertEquals(longestCommonEnding("pitiful", "beautiful"), "tiful")
Test.assertEquals(longestCommonEnding("truck", "trick"), "ck")
Test.assertEquals(longestCommonEnding("vote", "asymptote"), "ote")
Test.assertEquals(longestCommonEnding("multiplication", "ration"), "ation")
Test.assertEquals(longestCommonEnding("potent", "tent"), "tent")
Test.assertEquals(longestCommonEnding("skyscraper", "carnivore"), "")