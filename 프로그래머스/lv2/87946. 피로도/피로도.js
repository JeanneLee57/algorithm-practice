function solution(k, dungeons){
    let answer = 0
  const visited = Array.from({length: dungeons.length}, () => 0)
  
  function DFS(hp, count){
    for(let i=0; i<dungeons.length; i++){
      if(visited[i] === 0 && hp >= dungeons[i][0]){
        visited[i] = 1
        DFS(hp - dungeons[i][1], count +1)
        visited[i] = 0
      }
    }
    answer = Math.max(answer, count)
  }
    
    DFS(k, 0)
    return answer
}