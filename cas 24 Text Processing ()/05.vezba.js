function solve(text, str) {
    let newtext = text;
    let count = 0;
    while (newtext.includes(str)) {
        count++;
        newtext = newtext.replace(str, ".")
    }
    console.log(newtext)
    console.log(count)
}
solve('This is a word and it also is a sentence',
    'is'
)