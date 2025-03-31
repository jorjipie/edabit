// https://edabit.com/challenge/ii4ANncEGP4xjmQ5Y
function pyramidVolume(length, width, height, unit) {
	const unitLookup = { 
		"meters": 1, 
		"centimeters": 1000000,
		"kilometers": 1e-9,
		"millimeters": 1000000000
	};
	return (length * width * height * 2 / 6 * unitLookup[unit])
		.toFixed(3) + " cubic " + unit; 
}

const Test = require('../../test.js');
Test.assertEquals(pyramidVolume(10, 14, 6, "meters"), "280.000 cubic meters")
Test.assertEquals(pyramidVolume(8, 12, 2, "centimeters"), "64000000.000 cubic centimeters")
Test.assertEquals(pyramidVolume(92, 1245, 1923, "kilometers"), "0.073 cubic kilometers")
Test.assertEquals(pyramidVolume(19, 254, 21, "millimeters"), "33782000000000.000 cubic millimeters")
Test.assertEquals(pyramidVolume(13.6, 62.2, 6, "meters"), "1691.840 cubic meters")
Test.assertEquals(pyramidVolume(4230, 923, 1932, "kilometers"), "2.514 cubic kilometers")
