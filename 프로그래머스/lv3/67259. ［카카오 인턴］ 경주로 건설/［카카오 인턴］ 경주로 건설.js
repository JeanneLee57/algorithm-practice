function solution(board) {
    const l = board.length
    const dir = [[1,0], [-1,0], [0, 1],  [0, -1]]
    const visited = Array(l).fill().map(() => Array(l).fill().map(() => Array(4).fill(Infinity)));
    const bfs = (sx, sy) => {
        const q = []
        q.push([sx, sy, -1, 0])
        while(q[0]){
            const [cx, cy, cd, cost] = q.shift()
            for(let i=0; i<4; i++){
                const nx = cx + dir[i][0]
                const ny = cy + dir[i][1]
                if(nx<0 || ny<0 || nx>=l || ny>=l || board[nx][ny] === 1) continue
                const newCost = (cd === -1 || cd === i) ? cost + 100 : cost + 600
                if(visited[nx][ny][i] > newCost){
                    visited[nx][ny][i] = newCost
                    q.push([nx, ny, i, newCost])                    
                }
            }
        }
    }
    bfs(0,0)
    return Math.min(...visited[l-1][l-1])
}