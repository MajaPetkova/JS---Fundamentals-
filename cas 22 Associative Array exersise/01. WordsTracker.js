function wordsTracker(input) {
    let wordsToSearch = input.shift().split(' ');
    let words = {};

    for (let el of wordsToSearch) {
        words[el] = 0;
    }
    for (let word of input) {
        if (words.hasOwnProperty(word)) {
            // if (Object.keys(words).includes(word)) {
            words[word] += 1;
        }
    }
    //[this,3]
    //[sentence,2]
    let sorted = Object.entries(words).sort((a, b) => b[1] - a[1])

    for (let [key, value] of sorted) {
        console.log(`${key} - ${value}`)
    }
}
wordsTracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])