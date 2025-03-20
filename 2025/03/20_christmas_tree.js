// https://edabit.com/challenge/QeaCDhw3QrLwbeteD
function tree(h) {

}

const Test = require('../../test.js');
Test.assertSimilar(tree(1), ["#"])
Test.assertSimilar(tree(2), [
	" # ", 
	"###"
])
Test.assertSimilar(tree(5), [
	"    #    ",
	"   ###   ", 
	"  #####  ", 
	" ####### ", 
	"#########"
])
Test.assertSimilar(tree(0), [])