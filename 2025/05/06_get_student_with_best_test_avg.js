// https://edabit.com/challenge/nSg24HbusyCQKn9xk

const getBestStudent = studentObj =>  
    Object.entries(studentObj).reduce((a, student) => {
        const avg = student[1].reduce((b, c) => b + c) / student[1].length;
        return avg > a.avg ? { name: student[0], avg: avg } : a;
    }, { avg: 0 }).name;

const Test = require('../../test.js');

Test.assertSimilar(getBestStudent({
	John: [100, 90, 80],
	Bob: [100, 70, 80]
}), "John", "Example #1")

Test.assertSimilar(getBestStudent({
	Susan: [67, 84, 75, 63],
  Mike: [87, 98, 64, 71],
  Jim: [90, 58, 73, 86]
}), "Mike", "Example #2")

Test.assertSimilar(getBestStudent({
	Tim: [93, 84, 49, 71, 76, 83],
  Nick: [88, 91, 74, 72, 63, 68],
  Brad: [100, 94, 72, 64, 58, 81],
	Annie: [79, 93, 82, 82, 63, 87]
}), "Annie")

Test.assertSimilar(getBestStudent({
	Eddie: [65, 85, 72, 76],
  Brock: [55, 97, 82, 91],
  Jessica: [78, 62, 79, 99]
}), "Brock")