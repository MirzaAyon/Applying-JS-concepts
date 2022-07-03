// for loop reverse

function getFactorial2(number) {
    let factorial = 1;
    for (let i = number; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}

const myFactorial = getFactorial2(6);
console.log(myFactorial);