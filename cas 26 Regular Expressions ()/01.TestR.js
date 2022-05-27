// let text = 'Today is 2015-05-11';
// let regexp = /\d{4}-\d{2}-\d{2}/g;
// let hasMatch = regexp.test(text)
// console.log(hasMatch)
let text = 'Petar: 123, Mark: 456';
let pattern = /\d+/g;
let match1 = text.match(pattern);
let match2 = pattern.exec(text)
console.log(match2)