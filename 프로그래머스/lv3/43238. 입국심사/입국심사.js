function solution(n, times) {
    let start = 0
    let end = times.at(-1) * n
    let answer = 0
    while(start <= end){
        let mid = parseInt((start + end) / 2)
        let total = 0
        let max = 0
        for(let i=0; i<times.length; i++){
            let count = Math.floor(mid / times[i])
            total += count
            max = Math.max(max, count * times[i])
        }
        if(total >= n) end = mid - 1
        if(total < n) start = mid + 1
    }
    return start
}