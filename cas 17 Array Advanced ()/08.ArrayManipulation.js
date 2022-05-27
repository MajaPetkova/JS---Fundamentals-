function arrayManipulation(input) {
    let arr = input.shift().split(' ');

    for (let line of input) {
        let [command, firstArg, secondArg] = line.split(' ');

        if (command === 'Add') {
            arr.push(firstArg);
        } else if (command === 'Remove') {
            let index = arr.indexOf(firstArg);

            if (index !== -1) {
                arr.splice(index, 1)
            }
        } else if (command === 'RemoveAt') {
            let index = Number(firstArg);

            arr.splice(index, 1);
        } else {
            let index = Number(secondArg);
            arr.splice(index, 0, firstArg)
        }
    }
    return arr.map(Number).join(' ')
}
console.log(arrayManipulation(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
]))