import heapq
def solution(n, works):
    heap = [-el for el in works]
    heapq.heapify(heap)
    
    for i in range(n):
        work = heapq.heappop(heap)
        if work == 0: break
        work += 1
        heapq.heappush(heap, work)

    answer = 0
    
    for el in heap:
        answer += el ** 2
    
    return answer