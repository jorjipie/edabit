// https://edabit.com/challenge/QeaCDhw3QrLwbeteD
function tree(h) {
    let arr = new Array(h)
        , width = h * 2 - 1
        , margin = 0;
    for (let row = h - 1; row > -1; row--) {
        arr[row] = ' '.repeat(margin) 
            + '#'.repeat(width) 
            + ' '.repeat(margin);
        width -= 2;
        margin++;
    }
    return arr;
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