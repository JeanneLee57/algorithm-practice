def solution(n, computers):
    visited = [0 for _ in range(n)]
    answer = 0
    
    def dfs(node):
        nonlocal answer
        for i in range(n):
            if node == i: continue
            if not visited[i] and computers[node][i]:
                visited[i] = 1
                dfs(i)
    
    for j in range(n):
        if not visited[j]:
            dfs(j)
            answer += 1
    
    return answer