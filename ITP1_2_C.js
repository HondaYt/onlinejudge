function Main(input) {
    const arr = input.split(' ').map(e => Number(e))

    if (arr[0] > arr[1]) {
        const temp = arr[0]
        arr[0] = arr[1]
        arr[1] = temp
    }

    if (arr[1] > arr[2]) {
        const temp = arr[1]
        arr[1] = arr[2]
        arr[2] = temp
    }

    if (arr[0] > arr[1]) {
        const temp = arr[0]
        arr[0] = arr[1]
        arr[1] = temp
    }

    console.log(arr.join(' '))
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"))