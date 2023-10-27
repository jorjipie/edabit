// https://edabit.com/challenge/SNornDmdQ7ZJngoTn

import Test from '@codewars/test-compat'

Array.prototype.compact = function() {
	return [...new Set(this)].filter(c => c || c === 0 || c === false);
}

Test.assertSimilar([9, 9, 9, 8, 0, undefined].compact(), [9, 8, 0], "Test #1")
Test.assertSimilar(["", "hello", null, null, "hello"].compact(), ["hello"], "Test #2")
Test.assertSimilar([1, 2, 2, 3, null, 0, "", undefined, "another"].compact(), [1, 2, 3, 0, "another"], "Test #3")
Test.assertSimilar([true, true, false, 0, null].compact(), [true, false, 0], "Test #4")