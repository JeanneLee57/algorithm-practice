def solution(targets):
    targets.sort(key = lambda x: x[1])
    l = len(targets)
    i, cnt = 0, 0
    while i < l:
        [a, b] = targets[i]
        for j in range(i+1, l):
            if targets[j][0] < b:
                i = j
            else:
                cnt += 1
                break
        i += 1

    return cnt + 1
