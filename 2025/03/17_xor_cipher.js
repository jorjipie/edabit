// https://edabit.com/challenge/CHnhjwomyvwnEp7Sd

function XORCipher(msg1, msg2) {
    let arr = new Array(msg1.length < msg2.length ? msg1.length : msg2.length);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = (parseInt(msg1[i], 16) ^ parseInt(msg2[i], 16)).toString(16);
    }
    return arr.join('');
}

const Test = require('../../test.js');
Test.assertEquals(XORCipher("11", "22"), "33")
Test.assertEquals(XORCipher("1020304", "403201"), "501231")
Test.assertEquals(XORCipher("1c0111001f010100061a024b53535009181c", "686974207468652062756c6c277320657965"), "746865206b696420646f6e277420706c6179")
Test.assertEquals(XORCipher("aadf", "bce2"), "163d")
Test.assertEquals(XORCipher("ab3f", "ac"), "07")
Test.assertEquals(XORCipher("", ""), "")
Test.assertEquals(XORCipher("c611d9bdd9de38b9eb", "23a0745505d4d25494"), "e5b1ade8dc0aeaed7f")
Test.assertEquals(XORCipher("7d1e875da9d5e89b54c7eaf", "3541599be591709795cebd5"), "485fdec64c44980cc10957a")
Test.assertEquals(XORCipher("785a6677b3e52f0e7", "a8d97da7441"), "d0831bd0f7f")
Test.assertEquals(XORCipher("6cbd75511e7f750c6827", "1753547c813bfcd"), "7bee212d9f4489d")