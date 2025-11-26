function Main(input) {
    const inputArr = input.split(' ').map(e => Number(e))

    const aVal = inputArr[0]
    const bVal = inputArr[1]

    if (aVal === bVal) {
        console.log('a == b')
    } else if (aVal > bVal) {
        console.log('a > b')
    } else if (aVal < bVal) {
        console.log('a < b')
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"))