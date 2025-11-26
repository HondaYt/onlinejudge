function Main(input) {
    const inputArr = input.split(' ').map(e => Number(e))

    const aVal = inputArr[0]
    const bVal = inputArr[1]
    const cVal = inputArr[2]

    if (aVal < bVal && bVal < cVal) {
        console.log('Yes')
    } else {
        console.log('No')
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"))