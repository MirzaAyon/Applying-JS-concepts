function getFactorial(number) {
    let factorial = 1;
    // console.log(number);
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
        // factorial = factorial + i; //eta diye debug check korbo
        // console.log(i, factorial);
    }
    return factorial;
}

const getMyFactorial = getFactorial(8);
console.log(getMyFactorial);
//debugging er jnno prottek place e console kore dkhbo