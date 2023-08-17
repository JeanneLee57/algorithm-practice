function solution(num) {
    function div(num){
        return num/2
    }
    function mul(num){
        return num * 3 + 1
    }
    function collatz(num, count){
        if(num === 1) return count
        if(count === 500) return -1
        const newNum = num % 2 ? mul(num) : div(num)
        return collatz(newNum, count + 1)
    }
    return collatz(num, 0)
}