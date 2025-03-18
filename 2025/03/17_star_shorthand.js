function toStarShorthand(str) {
  const rex = /(.)\1{1,}/g
  const arr = [...str.matchAll(rex)];
  let offset = 0;  
  for (let i = 0; i < arr.length; i++) {
  	str = str.substring(0, arr[i].index + offset) 
      + arr[i][1] + '*' + arr[i][0].length
      + str.substring(offset + arr[i].index + arr[i][0].length);
    offset += 3 - arr[i][0].length 
  }
  return str;
}

const Test = require('../../test.js');
Test.assertEquals(toStarShorthand("abbccc"), "ab*2c*3")
Test.assertEquals(toStarShorthand("haaaappyyyyy"), "ha*4p*2y*5")
Test.assertEquals(toStarShorthand("77777geff"), "7*5gef*2")
Test.assertEquals(toStarShorthand("11223344"), "1*22*23*24*2")
Test.assertEquals(toStarShorthand("abc"), "abc")
Test.assertEquals(toStarShorthand(""), "")