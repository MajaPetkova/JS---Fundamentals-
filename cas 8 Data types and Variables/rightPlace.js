function solve(firstString, char, secondString) {
    let newString = firstString.replace("_", char)

    // if (newString === secondString) {
    //     console.log("Matched")
    // } else {
    //     console.log("Not Matched")
    // }

    let result = (newString === secondString) ? "Matched" : "Not Matched"
    console.log(result)
}
solve('Str_ng', 'I', 'Strong')