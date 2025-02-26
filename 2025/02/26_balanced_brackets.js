// https://edabit.com/challenge/6NSvSLWWix84rRqpD

const Test = require('../../test.js');
Test.assertEquals(isBalanced('()'), true)
Test.assertEquals(isBalanced('{[()]}'), true)
Test.assertEquals(isBalanced('{{[[(())]]}}'), true)
Test.assertEquals(isBalanced('{{[[(())[]]]}}'), true)
Test.assertEquals(isBalanced('[()]{}{[()()]()}'), true)
Test.assertEquals(isBalanced('{[([)]]}'), false)
Test.assertEquals(isBalanced('{[('), false)
Test.assertEquals(isBalanced('])}'), false)
Test.assertEquals(isBalanced('[[]'), false)
Test.assertEquals(isBalanced('{)(}'), false)
Test.assertEquals(isBalanced('{{[[([())]]]}}'), false)
Test.assertEquals(isBalanced(), undefined)

function isBalanced(str) {
  if (str == null) { return; }
  const brackets = { '{': '}', '(': ')', '[': ']' };
  let removed = 0, matchedBracket = null;
  do {
    removed = 0;
    for (let i = 0; i < str.length - 1; i++) {
      matchedBracket = brackets[str[i]];
      if (matchedBracket != null 
        && matchedBracket == str[i + 1]) {
        str = str.slice(0, i) + str.slice(i + 2);
        removed++;
      }
    }
  } while (removed > 0);
  return str.length == 0;
}