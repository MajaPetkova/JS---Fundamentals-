function demo(input) {
    for (const singleName of input) {
        let singlePerson = {
            name: singleName,
            personalNum: singleName.length
        };
        console.log(`Name: ${singlePerson.name} -- Personal Number: ${singlePerson.personalNum}`)
    }
    // input.forEach(element => console.log(`Name: ${element} -- Personal Number: ${element.length}`));
}
demo([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])