function Main(input) {
    const inputArr = input.split(' ').map(e => Number(e))

    const rect = {
        rectWidth: inputArr[0],
        rectHeight: inputArr[1],
        circleX: inputArr[2],
        circleY: inputArr[3],
        circleRadius: inputArr[4]
    }

}

Main(require("fs").readFileSync("/dev/stdin", "utf8"))