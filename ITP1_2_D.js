function Main(input) {
    const inputArr = input.split(' ').map(e => Number(e))

    const values = {
        rectWidth: inputArr[0],
        rectHeight: inputArr[1],
        circleX: inputArr[2],
        circleY: inputArr[3],
        circleRadius: inputArr[4]
    }

    let result = 'Yes'
    if ((values.circleX - values.circleRadius) < 0) {
        result = 'No'
    } else if ((values.circleX + values.circleRadius) > values.rectWidth) {
        result = 'No'
    } else if ((values.circleY + values.circleRadius) < 0) {
        result = 'No'
    } else if ((values.circleY + values.circleRadius) > values.rectHeight) {
        result = 'No'
    }


    console.log(result);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"))