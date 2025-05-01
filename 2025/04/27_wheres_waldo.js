// https://edabit.com/challenge/pNNvNZQCz2DmvT59d

const Test = require('../../test.js');

const whereIsWaldo = rows => {
    let notWaldo = rows[0][0];
    for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        for (let colIndex = 0; colIndex < rows[rowIndex].length; colIndex++) {
            if (rows[rowIndex][colIndex] != notWaldo) {
                return [rowIndex + 1, colIndex + 1];
            }
        }
    }
}

Test.assertSimilar(whereIsWaldo([
	["A", "A", "A"], 
	["A", "A", "A"], 
	["A", "B", "A"]
]), [3, 2])

Test.assertSimilar(whereIsWaldo([
	["c", "c", "c", "c"], 
	["c", "c", "c", "d"]
]), [2, 4])

Test.assertSimilar(whereIsWaldo([
	["O", "O", "O", "O"], 
	["O", "O", "O", "O"], 
	["O", "O", "O", "O"], 
	["O", "O", "O", "O"], 
	["P", "O", "O", "O"], 
	["O", "O", "O", "O"]
]), [5, 1])

Test.assertSimilar(whereIsWaldo([
	["X", "X", "Y", "X"], 
	["X", "X", "X", "X"], 
	["X", "X", "X", "X"]
]), [1, 3])