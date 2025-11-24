function Main(input) {
    const arr = input.split('\n').map(v => v.split(' '));
    console.log(arr);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"))