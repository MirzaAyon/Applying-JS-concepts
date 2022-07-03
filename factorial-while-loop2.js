//while loop reverse

function getFactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--; //++ dile infinity loop e chole jabe 
    }
    return factorial;
}

const myFactorial = getFactorial(6);
console.log(myFactorial);

