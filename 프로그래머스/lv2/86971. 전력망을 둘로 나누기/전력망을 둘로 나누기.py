def solution(n, wires):
    matrix = [[0 for _ in range(n+1)] for _ in range(n+1)]
    
    for wire in wires:
        [a, b] = wire
        matrix[a][b] = matrix[b][a] = 1

    def dfs(node, arr, visited):
        result = 1
        visited[node] = 1
        for i in range(n+1):
            if not visited[i] and arr[node][i]:
                visited[i] = 1
                result += dfs(i, arr, visited)
                visited[i] = 0
        return result
    
    answer = 100
    
    for wire in wires:
        vis = [0 for _ in range(n+1)]
        [x, y] = wire
        copy = [row[:] for row in matrix]
        copy[x][y] = copy[y][x] = 0
        answer = min(answer, abs(dfs(x, copy, vis) - dfs(y, copy, vis)))

    return answer