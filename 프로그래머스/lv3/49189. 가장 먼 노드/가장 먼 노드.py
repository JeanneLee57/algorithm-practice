from collections import deque

def solution(n, edge):
    my_map = [[] for _ in range(0, n+1)]
    distance = [0 for _ in range(0, n+1)]
    for [x, y] in edge:
        my_map[x].append(y)
        my_map[y].append(x)
        
    def bfs(node):
        q = deque()
        q.append(node)
        
        while q:
            cn = q.popleft()
            for i in my_map[cn]:
                if distance[i] == 0:
                    distance[i] = distance[cn] + 1
                    q.append(i)
    
    distance[1] = 1
    bfs(1)
    
    max_val = max(distance)
    
    return distance.count(max_val)