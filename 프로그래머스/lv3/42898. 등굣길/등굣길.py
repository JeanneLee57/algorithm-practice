def solution(m, n, puddles):
    matrix = [[0] * (n+1) for _ in range(m+1)]
    
    for [x, y] in puddles:
        matrix[x][y] = 0
    
    matrix[1][1] = 1

    for i in range(1, m+1):
        for j in range(1, n+1):
            if i == 1 and j == 1: continue
            if [i, j] in puddles: continue
            matrix[i][j] = matrix[i-1][j] + matrix[i][j-1]
            
    return matrix[m][n] % 1000000007