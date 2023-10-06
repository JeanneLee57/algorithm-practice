from collections import deque
def solution(maps):
    answer = 0
    n = len(maps)
    m = len(maps[0])
    start = []
    lever_visited = False
    lever = [0, 0]
    exit = []
    dp = [[[0, 0] for _ in range(m)] for _ in range(n)]
    
    for i in range(n):
        for j in range(m):
            l = maps[i][j]
            if l == 'S':
                start = [i, j]
            if l == 'L':
                dp[i][j] = [0, 'L']
            if l == 'X':
                dp[i][j] = ['X', 'X']
            if l == 'E':
                exit = [i, j]
    
    d = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    def bfs(sx, sy):
        nonlocal lever_visited
        nonlocal lever
        q = deque()
        q.append([sx, sy])
        while len(q):
            [cx, cy] = q.popleft()
            for j in range(0, 4):
                nx, ny = cx + d[j][0], cy + d[j][1]
                if nx < 0 or nx >= n or ny < 0 or ny >= m:
                    continue
                if dp[nx][ny][0] == 'X': continue
                else:
                    if not lever_visited:
                        if dp[nx][ny][0] == 0: # 아직 레버를 만나지 않았고, 첫방문이 안된 경우
                            dp[nx][ny][0] = dp[cx][cy][0] + 1
                            q.append([nx, ny])
                        if dp[nx][ny][1] == 'L': # 레버를 만나면 레버 좌표를 찍어주고 방문 처리
                            lever_visited = True
                            lever = [nx, ny]
                            dp[nx][ny][1] = dp[nx][ny][0]
                            return
                    if lever_visited:
                        if dp[nx][ny][1] == 0:
                            dp[nx][ny][1] = dp[cx][cy][1] + 1
                            q.append([nx, ny])
                    
    bfs(start[0], start[1])
    if lever_visited: bfs(lever[0], lever[1])
    if lever_visited and dp[exit[0]][exit[1]][1] != 0: return dp[exit[0]][exit[1]][1]
    else: return -1