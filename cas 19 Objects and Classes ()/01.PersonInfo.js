function objCreator(fn, ln, a) {
    let person = {
        firstName: fn,
        lastName: ln,
        age: a

    }
    return person
        // console.log(person.firstName)
}
objCreator("Peter", "Pan", 20)