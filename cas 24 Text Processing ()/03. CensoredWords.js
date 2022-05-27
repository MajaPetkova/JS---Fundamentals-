function censoredWords(text, word) {
    // let found = (text.includes(word))

    // while (found) {
    //     text = text.replace(word, '*'.repeat(word.length));
    //     found = text.includes(word)
    // }
    // console.log(text)
}

function censoredWords(text, word) {
    let tokens = text.split(word);
    // console.log(tokens)
    console.log(tokens.join('*'.repeat(word.length)))

}

function censoredWords(text, word) {
    let censored = "*".repeat(word.length);
    let newText = text.replace(word, censored); //samo prviot zbor ke go zemi
    while (newText.includes(word)) {
        newText = newText.replace(word, censored)
    }
    let fullCensored = "*".repeat(text.length);
    let withoutSpaces = "";

    for (let ch of text) {
        if (ch !== " ") {
            withoutSpaces += "*"
        } else {
            withoutSpaces += " "
        }
    }
    console.log(newText)
    console.log(fullCensored)
    console.log(withoutSpaces)
}
censoredWords('A small sentence with some words small', 'small')