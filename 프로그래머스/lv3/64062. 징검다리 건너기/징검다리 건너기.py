def solution(stones, k):
    start = 1
    end = max(stones)
    mid = 0
    answer = 0
    
    while start <= end:
        count = 0
        mid = (start + end) // 2
        for stone in stones:
            if stone <= mid:
                count += 1
                if count >= k: break
            else: count = 0
        if count < k:
            start = mid + 1
        else:
            answer = mid
            end = mid - 1
            
    return answer