// https://edabit.com/challenge/neWTApTYread9ZNdP

const products = obj => Object.entries(obj)
	.filter(c => c[1] >= 500).sort((a, b) => b[1] - a[1]).map(c => c[0]);

const Test = require('../../test.js')
Test.assertSimilar(products({"Computer" : 600, "TV" : 800, "Radio" : 100}), ["TV","Computer"])
Test.assertSimilar(products({"Bike1" : 510, "Bike2" : 401, "Bike3" : 501}), ["Bike1", "Bike3"])
Test.assertSimilar(products({"Calvin Klein" : 500, "Armani" : 5000, "Dolce & Gabbana" : 2000}), ["Armani", "Dolce & Gabbana", "Calvin Klein"])
Test.assertSimilar(products({"Loafers" : 50, "Vans" : 10, "Crocs" : 20}), [])
Test.assertSimilar(products({"Dell" : 400, "HP" : 300, "Apple" : 1200}), ['Apple'])