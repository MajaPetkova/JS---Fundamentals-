function solve(path) {
    let tokens = path.split('\\');
    let filename = tokens.pop()
    let index = filename.lastIndexOf('.');
    let name = filename.substring(0, index);
    let extension = filename.substring(index + 1)
    console.log(`File name: ${name}`)
    console.log(`File extension: ${extension}`)
}
solve('C:\\Projects\\Data-Structures\\LinkedList.cs')
solve('C:\\Projects\\Data-Structures\\template.bak.pptx')