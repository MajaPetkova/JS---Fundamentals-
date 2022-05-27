function solve(count) {
    let NumForPrint = 1;
    let sum = 0;
    for (let i = 0; i < count; i++) {
        console.log(NumForPrint);
        sum += NumForPrint;
        NumForPrint += 2;
    }
    console.log(`Sum: ${sum}`)
}
solve(7)