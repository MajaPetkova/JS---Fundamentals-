function printAndSume(a, b) {
    sum = 0;
    let output = '';

    for (let i = a; i <= b; i++) {
        output += `${i} `;
        sum += i;
    }
    console.log(output)
    console.log(`Sum: ${sum}`)
}
printAndSume(5, 10)