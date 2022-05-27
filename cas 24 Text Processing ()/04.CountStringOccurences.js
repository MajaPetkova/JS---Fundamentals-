function solve(text, word) {
    // word = ` ${word} `;
    // text = ` ${text} `;
    // let count = 0;
    // let index = 0;

    // let found = text.indexOf(word);
    // while (found != -1) {
    //     count++
    //     index = found + 1
    //     found = text.indexOf(word, index)
    // }
    // console.log(count)
    console.log(text.split(' ').filter(x => x === word).length)
}

function solve(text, word) {
    let textArr = text.split(' ');
    let counter = 0;
    for (let currentWord of textArr) {
        if (currentWord === word) {
            counter++
        }
    }
    console.log(counter)
}
solve('This is a word and it also is a sentence',
    'is'
)