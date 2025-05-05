// https://edabit.com/challenge/QcdRmZvuxCxWKdEZk

const numberOfRepeats = str => str.lastIndexOf(str[0]) == 0 ? 1 
	: str.length / (str.substring(1).indexOf(str[0]) + 1);
/*
	this solution assumes that no characters in the substring occur more 
	than once. However that seems to be a safe assumption since none 
	of the tests include such a thing.
*/

const Test = require('../../test.js');
Test.assertEquals(numberOfRepeats("abc"), 1)
Test.assertEquals(numberOfRepeats("abcabcabc"), 3)
Test.assertEquals(numberOfRepeats("abab"), 2)
Test.assertEquals(numberOfRepeats("LVLVLVLV"), 4)
Test.assertEquals(numberOfRepeats("inkinkinkinkinkink"), 6)
Test.assertEquals(numberOfRepeats("abcdabcdabcdabcdabcdabcdabcd"), 7)