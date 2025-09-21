// https://edabit.com/challenge/nLRGjd2LeAECKykZz

const recompose = str => str.separate()
    .map(c => c.split('').reverse().join(''))
    .join('')
    .replace(/[A-Z]/g, match => ' ' + match)
    .substring(1);

String.prototype.IsVowel = function() {
    return /[aeiou]/i.test(this);
}
String.prototype.separate = function () {
    let vowel = this[0].IsVowel(), arr = [], currGrp = this[0];
    for (let i = 1; i < this.length; i++) {
        if (vowel == this[i].IsVowel()) { 
            currGrp += this[i]; 
        }
        else { 
            arr.push(currGrp); 
            currGrp = this[i];
            vowel = !vowel;
        }
    }
    arr.push(currGrp);
    return arr;
}

const Test = require('../../test.js');
Test.assertEquals(recompose("KiKdaola"), "Kid Koala", "Example in Instructions")
Test.assertEquals(recompose("BaosdrOCfanada"), "Boards Of Canada", "Example #2")
Test.assertEquals(recompose("hCemicarBlohtesr"), "Chemical Brothers", "Example #3")
Test.assertEquals(recompose("MuosOeMnasr"), "Mouse On Mars")
Test.assertEquals(recompose("AhpewTxin"), "Aphex Twin")
Test.assertEquals(recompose("MassivAettakc"), "Massive Attack")
Test.assertEquals(recompose("DeosItOffeYdnuoYaeh"), "Does It Offend You Yeah")
