import heapq

def solution(operations):
    heap = []
    for op in operations:
        command, data = op.split(' ')
        data = int(data)
        if command == 'I':
            heapq.heappush(heap, data)
        elif len(heap) == 0:
            continue
        elif data == -1:
            heapq.heappop(heap)
        else:
            heap = [-el for el in heap]
            heapq.heapify(heap)
            heapq.heappop(heap)
            heap = [-el for el in heap]
            heapq.heapify(heap)
    
    heap.sort()
    return [0, 0] if len(heap) == 0 else [heap[len(heap) -1], heap[0]]
        