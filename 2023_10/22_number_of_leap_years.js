// https://edabit.com/challenge/EzxPadgs3Y9hYWymS

Number.prototype.isLeap = function() {
    return new Date(this, 1, 29).getMonth() === 1;
}

const numLeapYears = inputStr => {
    const years = inputStr.split('-').map(s => parseInt(s));
    let leapYears = 0;
    for (let i = years[0]; i <= years[1]; i++) { 
        if (i.isLeap()) { 
            leapYears++; 
            console.log(i);
        }
    }
    return leapYears;
}
console.log(numLeapYears('2000-2020')) // 854;