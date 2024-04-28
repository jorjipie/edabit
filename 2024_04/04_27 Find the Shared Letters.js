/*  https://edabit.com/challenge/33EsK9mQzGGzRkXQT */

function sharedLetters(str1, str2) {
    const arr1 = str1.toLowerCase().split('')
        .sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
    const arr2 = str2.toLowerCase().split('');
    let matches = []
    arr1.forEach(l => {
        if (matches.indexOf(l) != -1) { } 
        else if (arr2.indexOf(l) != -1) { matches.push(l); }
    })
    return matches.join('');
}
console.log(sharedLetters('My dog is a GOOD BOY 🐶', 'Do you like ice cream? 🍦'));
console.log(sharedLetters('🙂😀😄😁', '🙂😞😔😣'));