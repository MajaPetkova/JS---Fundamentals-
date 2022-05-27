function repeat(string, num) {
    let output = "";
    for (let i = 0; i < num; i++) {
        output += string;
    }
    console.log(output)
}
repeat('abc', 3)