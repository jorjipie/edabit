// https://edabit.com/challenge/dHAk8zPwacSev6Hmv

const nomNom = arr => {
    let i = 0;
    console.log(arr);
    while (i < arr.length - 1) {
        while (arr[i] > arr[i+1]) {
            arr[i] += arr[i + 1];
            arr.splice(i + 1, 1);
            console.log(arr);
        }
        i++;
    }
    return arr;
}

const Test = require('../../test.js');
Test.assertSimilar(nomNom([1, 2, 3]), [1, 2, 3], "1 cannot eat 2, so numbers remain uneaten.")
Test.assertSimilar(nomNom([2, 1, 3]), [3, 3], "2 can eat 1 to become 3. 3 cannot eat 3.")
Test.assertSimilar(nomNom([8, 5, 9]), [22], "8 eats 5 to become 13, 13 eats 9 to become 22.")
Test.assertSimilar(nomNom([5, 3, 7]), [15], "5 eats 3 to become 8. 8 eats 7 to become 15.")
Test.assertSimilar(nomNom([5, 3, 9]), [8, 9], "5 eats 3 to become 8. 8 cannot eat 9.")
Test.assertSimilar(nomNom([6, 5, 6, 100]), [17, 100], "6 eats 5 to become 11. 11 eats 7 to become 17. 17 cannot eat 100.")