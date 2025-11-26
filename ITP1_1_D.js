function Main(input) {
    let inputNum = Number(input)

    const time = {
        hours: 0,
        minutes: 0,
        seconds: 0
    }

    const HOUR_SECONDS = 3600
    const MINUTE_SECONDS = 60

    time.hours = Math.floor(inputNum / HOUR_SECONDS)
    inputNum = inputNum % HOUR_SECONDS

    time.minutes = Math.floor(inputNum / MINUTE_SECONDS)
    inputNum = inputNum % MINUTE_SECONDS

    time.seconds = inputNum

    const result = `${time.hours}:${time.minutes}:${time.seconds}`

    console.log(result)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"))