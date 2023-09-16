function solution(board) {
    const l = board.length
    const dir = [[1,0], [0, 1], [-1,0], [0, -1]]
    const bfs = (sx, sy) => {
        const q = []
        q.push([sx, sy, -1])
        while(q[0]){
            const [cx, cy, cd] = q.shift()
            for(let i=0; i<4; i++){
                const nx = cx + dir[i][0]
                const ny = cy + dir[i][1]
                if(nx<0 || ny<0 || nx>=l || ny>=l) continue
                const cost = (cd === -1 || cd === i) ? 100 : 600
                if(board[nx][ny] === 0 || board[nx][ny] >= board[cx][cy] + cost){
                    board[nx][ny] = board[cx][cy] + cost
                    q.push([nx, ny, i])                    
                }
            }
        }
    }
    bfs(0,0)
    return board[l-1][l-1]
}