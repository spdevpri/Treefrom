const mainLoop = (n) => {

    if (n == 0) {
        return 0
    }

    let begin = 5
    let lastEnd = 0
    let condition = true
    let level = 0
    let nCheckSum = 0

    while (condition) {
        nCheckSum += begin + lastEnd
        console.log(nCheckSum)
        if (n <= nCheckSum) {

            let subCount = 0
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < begin; j++) {
                    subCount++

                    if (n == (lastEnd + subCount)) {
                        console.log(subCount, " ", lastEnd)
                    }


                }
            }
            condition = false
        }

        level++
        lastEnd = begin
        begin *= 5
    }
}


mainLoop(32)