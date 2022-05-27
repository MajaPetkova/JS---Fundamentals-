function bombsIvo(sequence, bomb) {
    let [specialNum, power] = bomb;

    while (sequence.includes(specialNum)) {
        let idx = sequence.indexOf(specialNum);
        let elemetsToRemove = power * 2 + 1;
        let startIndex = idx - power;

        if (startIndex < 0) {
            // elemetsToRemove += startIndex;
            startIndex = 0;
        }
        sequence.splice(startIndex, elemetsToRemove);
    }
    let sum = 0;
    for (let i = 0; i < sequence.length; i++) {
        sum += sequence[i]
    }
    return sum;

}
let result = bombsIvo([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
console.log(result)