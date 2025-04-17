// https://edabit.com/challenge/Hz38C3DmRhpHJSKBq

const sockMerchant = arr => {
    let unmatched = [], matchCount = 0, matchIndex = -1;
    for (let i = 0; i < arr.length; i++) {
        matchIndex = unmatched.indexOf(arr[i]);
        if (matchIndex == -1) { unmatched.push(arr[i]); }
        else { 
            matchCount++;
            unmatched.splice(matchIndex, 1);
        }
    }
    return matchCount;
}

const Test = require('../../test.js');
Test.assertEquals(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]), 3)
Test.assertEquals(sockMerchant([50, 20, 30, 90, 30, 20, 50, 20, 90]), 4)
Test.assertEquals(sockMerchant([90, 20, 30, 40, 40, 20, 30, 20, 90]), 4)
Test.assertEquals(sockMerchant([10, 40, 40, 40, 40, 20, 10, 10, 10]), 4)
Test.assertEquals(sockMerchant([50, 40, 30, 10, 60, 60, 90, 80, 10]), 2)
Test.assertEquals(sockMerchant([50, 40, 30, 100, 60, 65, 90, 80, 10]), 0)