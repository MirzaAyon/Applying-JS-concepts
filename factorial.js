/*
3! = 3 X 2 X 1
4! = 4 X 3 X 2 X 1
5! = 5 X 4 X 3 X 2 X 1
6! = 6 X 5 X 4 X 3 X 2 X 1
7! = 7 X 6 X 5 X 4 X 3 X 2 X 1
*/
var factorial = 1;
for (var i = 1; i <= 7; i++) {
    factorial = factorial * i;
}
console.log(factorial);
//bahire declare korle ager maan ta store hoye thakbe fole factorial thik thak kaj hbe 


// for (var i = 1; i <= 7; i++) {
//     console.log(i);
//     var factorial = 1;
//     factorial = factorial * i;
//     console.log(factorial);
// } //evabe loop er vitore korle hbe na
