def solution(n, times):
    times.sort()
    l = len(times)
    start = 0
    end = times[l - 1] * n
    answer = 0
    while start <= end:
        mid = (start + end) // 2
        temp = 0
        for time in times:
            temp += (mid // time)
        if temp < n:
            start = mid + 1
        elif temp >= n:
            end = mid -1
    return start