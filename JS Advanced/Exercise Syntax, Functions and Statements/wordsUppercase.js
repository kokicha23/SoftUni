function solve(str) {
    console.log(str.match(/\w+/g).join(', ').toUpperCase());
}
solve("Hi, how are you?")