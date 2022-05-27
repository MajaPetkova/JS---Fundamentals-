function objCreate(num, binaryNum) {
    let counter = 0;
    while (num !== 0) {
        let leftover = num % 2;
        if (leftover === binaryNum) {
            counter++
        }
        num = parseInt(num / 2);
    }

    console.log(counter)
}
objCreate(20, 0)