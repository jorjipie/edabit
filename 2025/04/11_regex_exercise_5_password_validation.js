// https://edabit.com/challenge/RCbczQk6jdAd5N46D

const REGEXP = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/g

let str1 = "bbA234c@cy~!" 
let str2 = "32Bl4###xxz" 
let str3 = "!abcABC9lzD" 
let str4 = "d@!2?%^&ahaZbb" 

const validate = (REGEXP) => {
	 // if(!//.test(String(REGEXP))) return () => "invalid" 
	 return function testReg(str) {
			return REGEXP.test(str)  
	 }
}

const testExp = validate(REGEXP)
const Test = require('../../test.js');
// Test.assertNotEquals(testExp(str), "invalid", "Nothing new here")
Test.assertSimilar(testExp(str1), true)
Test.assertSimilar(testExp(str2), true)
Test.assertSimilar(testExp(str3), true)
Test.assertSimilar(testExp(str4), true)

// credits to https://levelup.gitconnected.com/extremely-useful-regular-expression-examples-for-real-world-applications-567e844a0822