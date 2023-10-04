def solution(triangle):
    l = len(triangle)
    for i in range(l):
        for j, _ in enumerate(triangle[i]):
            if i == 0 and j == 0: continue
            elif j == 0: triangle[i][j] += triangle[i-1][j]
            elif j == i: triangle[i][j] += triangle[i-1][j-1]
            else: triangle[i][j] += max(triangle[i-1][j-1], triangle[i-1][j])

    return max(triangle[l-1])