// https://edabit.com/challenge/rQj7JcXSnG5sy33rr

const commentsCorrect = str => 
	str.replace(/(\/\*\*\/)/g, '').replace(/\/\//g, '').length == 0;

const Test = require('../../test.js');
Test.assertEquals(commentsCorrect("//////"), true)
Test.assertEquals(commentsCorrect("/**//**////**/"), true)
Test.assertEquals(commentsCorrect("/**//**//**//**/"), true)
Test.assertEquals(commentsCorrect("///**///"), true)
Test.assertEquals(commentsCorrect("/**//////**//**////**/////"), true)
Test.assertEquals(commentsCorrect("//"), true)
Test.assertEquals(commentsCorrect("/**/"), true)
Test.assertEquals(commentsCorrect("///*/**/"), false)
Test.assertEquals(commentsCorrect("//*/**/"), false)
Test.assertEquals(commentsCorrect("/////"), false)
Test.assertEquals(commentsCorrect("///"), false)
Test.assertEquals(commentsCorrect("/**///**/"), false)
Test.assertEquals(commentsCorrect("/**/////**/"), false)