function solution(maps) {
    const dir = [[1,0], [-1,0], [0,1], [0,-1]]
    const n = maps.length
    const m = maps[0].length

    function BFS(sx, sy){
        const q = []
        q.push([sx, sy])
        
        while(q.length !== 0){
            const [x, y] = q.shift();
            
            for(let i=0; i<4; i++){
                const nx = x+dir[i][0]
                const ny = y+dir[i][1]
                
                if(nx<0||ny<0||nx>=n||ny>m) continue;
                
                if(maps[nx][ny] === 1){
                    q.push([nx,ny])
                    maps[nx][ny] = maps[x][y] + 1
                }
            }
        }
        }
    BFS(0, 0)
    return maps[n-1][m-1] === 1 ? -1 : maps[n-1][m-1]
}