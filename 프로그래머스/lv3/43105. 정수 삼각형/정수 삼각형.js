function solution(triangle) {
    let depth = triangle.length
    // let answer = 0
    // function dfs(sum, count, position){
    //     if(count < depth){
    //         dfs(sum+triangle[count][position], count+1, Math.max(position, 0))
    //         dfs(sum+triangle[count][position], count+1, Math.min(position+1, count+1))
    //     } else answer = Math.max(answer, sum)
    // }
    // dfs(0, 0, 0)
    // return answer;
    triangle.map((el, idx) => {
        if(idx === 0) return
        for(let i=0; i<=idx; i++){
            el[i] += Math.max(triangle[idx-1][Math.max(0,i-1)], triangle[idx-1][Math.min(i, triangle[idx-1].length-1)])
        }
    })
    let answer = triangle[triangle.length-1].reduce((acc, cur) => {
        if(cur > acc) acc = cur
        return acc
    }, 0)
    return answer
}