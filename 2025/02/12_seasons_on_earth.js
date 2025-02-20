// https://edabit.com/challenge/4d4RamC7mArPEwHpX

function hemisphereSeason(hemisphere, date) {
	let m = new Date(date).getMonth()
    switch (hemisphere) {
        case "N":
            return m < 2 ? "Winter" : m < 5 ? "Spring" : m < 8 ? "Summer" : m < 11 ? "Autumn" : "Winter";
        case "S":
            return m < 2 ? "Summer" : m < 5 ? "Autumn" : m < 8 ? "Winter" : m < 11 ? "Spring" : "Summer";
    }
}

const Test = require('../../test.js');

Test.assertEquals(hemisphereSeason("N", "June, 30"), "Summer", "Example #1")
Test.assertEquals(hemisphereSeason("N", "March, 1"), "Spring", "Example #2")
Test.assertEquals(hemisphereSeason("S", "September, 22"), "Spring", "Example #3")
Test.assertEquals(hemisphereSeason("S", "April, 20"), "Autumn")
Test.assertEquals(hemisphereSeason("N", "November, 20"), "Autumn")
Test.assertEquals(hemisphereSeason("S", "May, 8"), "Autumn")
Test.assertEquals(hemisphereSeason("N", "February, 28"), "Winter")
Test.assertEquals(hemisphereSeason("S", "August, 6"), "Winter")
Test.assertEquals(hemisphereSeason("N", "July, 28"), "Summer")
Test.assertEquals(hemisphereSeason("S", "October, 12"), "Spring")
Test.assertEquals(hemisphereSeason("N", "December, 31"), "Winter")
Test.assertEquals(hemisphereSeason("S", "January, 2"), "Summer")