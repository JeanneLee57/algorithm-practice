import heapq
def solution(jobs):
    now, answer, i = 0, 0, 0
    start = -1
    heap = []
    
    while i < len(jobs):
        for job in jobs:
            if start < job[0] <= now:
                heapq.heappush(heap, [job[1], job[0]])
        if len(heap):
            [duration, req_time] = heapq.heappop(heap)
            start = now
            now += duration
            answer += now - req_time
            i += 1
        else: now += 1
            
    
    return answer // len(jobs)