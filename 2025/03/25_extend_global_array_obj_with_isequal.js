//https://edabit.com/challenge/ngX9LEmCvRq7ud7J5

Array.prototype.isEqual = function(arr, ignoreOrder) {
    return ignoreOrder 
      ? arr.every((v) => this.indexOf(v) != -1) 
      : this.join(',') == arr.join(',');
}

const Test = require('../../test.js');
Test.assertSimilar([1, 2, 3].isEqual([1, 2, 3]), true, "Test #1 - Same order")
Test.assertSimilar([1, 2, 3].isEqual([1, 3, 2]), false, "Test #2 - Different order, ignoreOrder = false")
Test.assertSimilar([7, 45, "hello"].isEqual(["hello", 45, 7], true), true, "Test #3 - Different order, ignoreOrder = true")