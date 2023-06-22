// https://edabit.com/challenge/naXh8G72D98EhidqT

function pileCubes(m) {
    let n = (Math.sqrt(8*Math.sqrt(m)+1)-1)/2;
    return Number.isInteger(n) ? n : null;
}


