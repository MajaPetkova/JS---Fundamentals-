function housePartyy(array) {
    let people = [];
    // let newArr = array[0].split(' is ');
    // let name = newArr[0]
    // let action = newArr[1]

    for (let line of array) {
        let [personName, action] = line.split(' is ');

        if (action === 'going!') {
            if (!people.includes(personName)) {
                people.push(personName)
            } else {
                console.log(`${personName} is already in the list!`)
            }
        } else if (action === 'not going!') {
            if (people.includes(personName)) {
                people = people.filter(x =>
                    x !== personName)
            } else {
                console.log(`${personName} is not in the list!`)
            }
        }
    }
    console.log(people.join('\n'))
}
housePartyy(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
])