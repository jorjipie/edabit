// https://edabit.com/challenge/D7wauJQRRCnCqroEZ

import Test from '@codewars/test-compat'

const splitAndDelimit = (str, num, del) => {
    let arr = [];
    for (let i = 0; i < str.length; i += num) {
        let end = i + num > str.length ? str.length : i + num;
        arr.push(str.substring(i, end));
    }
    return arr.join(del);
}

Test.assertEquals(splitAndDelimit("bellow", 2, '&'), "be&ll&ow")
Test.assertEquals(splitAndDelimit("magnify", 3, ':'), "mag:nif:y")
Test.assertEquals(splitAndDelimit("poisonous", 2, '~'), "po~is~on~ou~s")
Test.assertEquals(splitAndDelimit("shape-shifting", 5, '^'), "shape^-shif^ting")
Test.assertEquals(splitAndDelimit("nebulous", 1, '#'), "n#e#b#u#l#o#u#s")