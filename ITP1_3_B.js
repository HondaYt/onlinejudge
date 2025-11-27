function Main(input) {
    const inputArr = input.split('\n').map(e => Number(e))

    console.log(inputArr);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"))