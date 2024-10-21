function factorial(getal) {
    if (getal === 0 || getal === 1) {
        return 1;
    }
    
    let resultaat = 1;
    for (let i = 2; i <= getal; i++) {
        resultaat *= i;
    }
    return resultaat;
}

let resultaat = factorial(9);
console.log(resultaat);

process.exit()