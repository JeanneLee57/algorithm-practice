function solution(rectangle, characterX, characterY, itemX, itemY) {
  const chX = characterX * 2;
  const chY = characterY * 2;
  const iX = itemX * 2;
  const iY = itemY * 2;
  const map = Array.from({ length: 103 }, () => Array(103).fill(0));
  rectangle.forEach(([x1, y1, x2, y2]) => {
    x1 *= 2;
    y1 *= 2;
    x2 *= 2;
    y2 *= 2;
    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j <= y2; j++) {
        if (i === x1 || i === x2 || j === y1 || j === y2) {
          if (map[i][j] === 0) map[i][j] = 1;
        } else map[i][j] = 2;
      }
    }
  });
    map[chX][chY] = 0
    const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    const bfs = (sx, sy) => {
        const q = []
        q.push([sx, sy])
        while(q[0]){
            const [cx, cy] = q.shift()
            if(cx === iX && cy === iY) break;
            for(let i=0; i<4; i++){
                const nx = cx + dir[i][0]
                const ny = cy + dir[i][1]
                if(nx < 0 || ny < 0 || nx > 103 || ny > 103) continue;
                if(map[nx][ny] === 1){
                    q.push([nx, ny])
                    map[nx][ny] = map[cx][cy] + 1
                }
            }
        }
    }
    bfs(chX, chY)
  return parseInt(map[iX][iY] / 2);
}