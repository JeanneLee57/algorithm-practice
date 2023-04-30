function solution(word) {
    var answer = 0;
    const l = word.length
    const arr = ['A', 'E', 'I', 'O', 'U']
    for(let i=0; i<l; i++){
        const idx = arr.findIndex(x => x === word[i])
        let mid = 0
        for(j=0; j<(5-i); j++){
            mid += (5 ** j)
        }
        answer += idx * mid + 1
    }
    //A -> AAAAA -> 5
    //AAAAE -> AAAAU -> 4
    //AAAE, AAAEI
    return answer;
}