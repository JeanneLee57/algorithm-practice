def solution(sequence):
    pulse = [ el if i%2 else -el for i, el in enumerate(sequence)]
    l = len(sequence)
    answer = 0
    dp = [ 0 for _ in range(l)]
    for i in range(l):
        if i == 0:
            if pulse[0] >= 0: dp[i] = [pulse[0], 0]
            else: dp[i] = [0, pulse[0]]
        else:
            dp[i] = [max(dp[i-1][0]+pulse[i], pulse[i]), min(dp[i-1][1]+pulse[i], pulse[i])]
        answer = max(answer, abs(dp[i][0]), abs(dp[i][1]))
    return answer