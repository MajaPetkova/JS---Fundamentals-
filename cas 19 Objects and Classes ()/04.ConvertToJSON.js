function objectToJSON(name, lastName, hairColor) {
    let obj = {
        name,
        lastName,
        hairColor,
    }

    let person = JSON.stringify(obj);
    console.log(person)
}
objectToJSON('George', 'Jones', 'Brown')