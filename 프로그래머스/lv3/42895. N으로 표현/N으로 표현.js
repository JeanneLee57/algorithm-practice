function solution(N, number) {
    const cases = Array.from(new Array(9), () => new Set())
    let answer = -1
    let isInitial = true
    if(N === number) return 1
    else cases.forEach((set, idx) => {
        if(idx !== 0) set.add(parseInt((''+N).repeat(idx)))
        for(let i=1; i<idx; i++){
            for(let j=idx-i; j>0; j--){
                for(let x of cases[i]){
                    for(let y of cases[j]){
                        set.add(x + y)
                        set.add(x - y)
                        set.add(x * y)
                        set.add(parseInt(x / y))
                    }
                }
            }
        }
        if(set.has(number) && isInitial) {
            answer = idx
            isInitial = false
        }
    })
    return answer
}