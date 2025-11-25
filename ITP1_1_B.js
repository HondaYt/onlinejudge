function Main(input) {
    const result = input * input * input
    console.log(result);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"))