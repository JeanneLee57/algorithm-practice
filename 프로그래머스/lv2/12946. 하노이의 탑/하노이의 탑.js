function solution(n) {
    let result = []
    const hanoi = (num, from, to, via) => {
        if(num === 1) result.push([from, to])
        else {
            hanoi(num-1, from, via, to)
            result.push([from, to])
            hanoi(num-1, via, to, from)
        }
    }
    hanoi(n, 1, 3, 2)
    return result
}