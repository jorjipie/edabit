// https://edabit.com/challenge/AkSERJZ9pTEZfFMNE

const sockPairs = str => {
    let unPaired = [];
    let pairCount = 0;
    for (let i = 0; i < str.length; i++) {
        let matchIndex = unPaired.indexOf(str[i]);
        if (matchIndex == -1) { 
            unPaired.push(str[i])
        }
        else {
            pairCount++;
            unPaired.splice(matchIndex, 1);
        }
    }
    return pairCount;
}

const Test = require('../../test.js');
Test.assertEquals(sockPairs("AA"), 1)
Test.assertEquals(sockPairs("ABABC"), 2)
Test.assertEquals(sockPairs("CABBACCC"), 4)
Test.assertEquals(sockPairs("AACDE"), 1)
Test.assertEquals(sockPairs("ACDBE"), 0)
Test.assertEquals(sockPairs(""), 0)
Test.assertEquals(sockPairs("ABABAB"), 2)
Test.assertEquals(sockPairs("AAAAA"), 2)
Test.assertEquals(sockPairs("AAACCBB"), 3)