function solve(x, y) {

    function faktoriel(n) {
        let sum = 1;
        for (let i = 1; i <= n; i++) {
            sum *= i;
        }
        return sum;
    }
    return (faktoriel(x) / faktoriel(y)).toFixed(2);
}
let result = solve(5, 2);
console.log(result)