// https://edabit.com/challenge/raWPf5nZyRKEEH6ZQ

const pizzaPoints = (customers, minOrders, minPrice) =>
    Object.entries(customers).filter(customer =>
        customer[1].filter(order => order >= minPrice).length >= minOrders
    ).map(customer => customer[0]).sort();

const Test = require('../../test.js');
let obj1 = {
    'Batman': [22, 30, 11, 17, 15, 52, 27, 12],
    'Spider-Man': [5, 17, 30, 33, 40, 22, 26, 10, 11, 45]
  }
  
  let obj2 = {
    'Captain America': [10, 10, 54, 14, 51, 33, 42, 73, 66, 33, 55, 42, 47],
    'Iron Man': [30, 56, 38, 14, 17],
    'Hulk': [53, 25, 13, 7, 61, 16, 17, 29, 64, 8],
    'Superman': [27, 28]
  }
  
  let obj3 = {
    'Zorro': [13, 53, 10, 51],
    'Wolverine': [16],
    'Elon Musk': [26, 61, 23, 61, 39, 50, 53, 54, 45, 46, 42, 49, 18, 75, 11, 73, 42, 61, 15, 60, 70, 67, 8, 9, 63, 55, 55, 35, 24, 59, 13, 49, 46, 26, 7, 8, 8, 34, 73, 60, 27, 28, 28, 48, 10]
  }
  
  Test.assertSimilar(pizzaPoints(obj1, 5, 20), ["Spider-Man"]);
  Test.assertSimilar(pizzaPoints(obj2, 1, 5), ["Captain America", "Hulk", "Iron Man", "Superman"]);
  Test.assertSimilar(pizzaPoints(obj3, 7, 15), ["Elon Musk"]);
  Test.assertSimilar(pizzaPoints(obj1, 10, 5), ["Spider-Man"]);
  Test.assertSimilar(pizzaPoints(obj2, 2, 35), ["Captain America", "Hulk", "Iron Man"]);
  Test.assertSimilar(pizzaPoints(obj3, 3, 25), ["Elon Musk"]);
  Test.assertSimilar(pizzaPoints(obj3, 4, 12), ["Elon Musk"]);
  Test.assertSimilar(pizzaPoints(obj2, 1, 75), []);
  Test.assertSimilar(pizzaPoints(obj1, 100, 1), []);
  Test.assertSimilar(pizzaPoints(obj3, 2, 67), ["Elon Musk"]);