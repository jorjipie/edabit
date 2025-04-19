// https://edabit.com/challenge/zaJeE6susYdwRyB6j

const lambdaDepth = depth => depth == 0 ? 'edabit' : () => lambdaDepth(depth - 1);

const Test = require('../../test.js');
Test.assertEquals(lambdaDepth(0), 'edabit', 'Depth: 0')
Test.assertEquals(lambdaDepth(1)(), 'edabit', 'Depth: 1')
Test.assertEquals(lambdaDepth(2)()(), 'edabit', 'Depth: 2')
Test.assertEquals(typeof lambdaDepth(2)(), 'function', 'Depth: 2')

// The following for loop generates 20 additional test cases.
// For each integer k, the first test case calls lambda_depth(k)
// and checks that lambda_depth(k), when called k times, returns 'edabit'.
// The second test case checks if lambda_depth(k) returns a function.

for (k = 5; k < 15; k++) {
	n = k.toString()
	eval("Test.assertEquals(lambdaDepth(" + n + ")" + "()".repeat(k) + ", 'edabit', 'Depth: " + n + "')")
	Test.assertEquals(typeof lambdaDepth(k), 'function', 'Depth: ' + n)
}