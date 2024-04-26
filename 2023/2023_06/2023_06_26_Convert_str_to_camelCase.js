// https://edabit.com/challenge/xt4CMLpfFRuDTsJgC

const toCamelCase = str => {
    return str.length == 0 ? '' : str.match(/[A-Za-z]+/g)
        .map((e, i) =>  i == 0 
            ? e : e[0].toUpperCase() + e.substring(1).toLowerCase()).join('') 
};

console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase(''));