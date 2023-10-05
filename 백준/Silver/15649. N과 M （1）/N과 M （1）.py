N, M  = map(int, input().split(' '))
visited = [0 for _ in range(N+1)]
def dfs(depth, perm):
    if depth == M:
        print(" ".join(map(str, perm)))
        return
    for j in range(1, N+1):
        if not visited[j]:
            visited[j] = 1
            dfs(depth+1, perm+[j])
            visited[j] = 0
dfs(0, [])