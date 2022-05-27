function matrix(input) {
    let number = input;

    let rows = (num) => {
        return `${num} `.repeat(num);

    }
    for (let i = 1; i <= number; i++) {
        console.log(rows(input))
    }
}
matrix(5)