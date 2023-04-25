function solution(answers) {
    const arr = [[1,2,3,4,5],
    [2,1,2,3,2,4,2,5],
    [3,3,1,1,2,2,4,4,5,5]]
    var answer = [];
    let result = []
    
    for(let i=0; i<3; i++){
    answer.push(answers.reduce((a,b,idx) => {            
            if(b === arr[i][idx % arr[i].length]) a++
            return a
        }, 0))}
    let max = Math.max(...answer)

    answer.forEach((v,i) => {
        if(v === max) result.push(i+1)
    })
    return result
}