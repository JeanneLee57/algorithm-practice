function solution(n, s, a, b, fares) {
    let map = Array.from({length:n+1}, () => Array(n+1).fill(Infinity))
    fares.forEach(fare => {
        let start = fare[0]
        let end = fare[1]
        map[start][end] = map[end][start] = fare[2]
    })
    for(let i=1; i<n+1; i++){
        map[i][i] = 0
    }
    
    for(let k=1; k<n+1; k++){
        for(let i=1; i<n+1; i++){
            for(let j=1; j<n+1; j++){
                if(map[i][k] + map[k][j] < map[i][j]){
                    map[i][j] = map[i][k] + map[k][j]
                }
            }
        }
    }
    let answer = map[s][a] + map[s][b]
    for(let i=1; i<n+1; i++){
            answer = Math.min(map[s][i] + map[i][a] + map[i][b], answer)
    }
    return answer
}