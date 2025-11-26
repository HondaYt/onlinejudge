function Main(input) {
    const inputArr = input.split(' ').map(e => Number(e))

    const rect = {
        width: inputArr[0],
        height: inputArr[1],
        area: 0,
        perimeter: 0
    }
    rect.area = rect.width * rect.height
    rect.perimeter = (rect.width + rect.height) * 2

    const result = `${rect.area} ${rect.perimeter}`

    console.log(result)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"))