import math
def solution(n, stations, w):
    reach = w * 2 + 1
    lengths = []
    answer = 0
    
    for i in range(0, len(stations)):
        start = 1
        end = n + 1
        if stations[i] <= w + 1: end = 1
        else:
            start = stations[i - 1] + w + 1 if i else 1
            end = stations[i] - w
        answer += math.ceil((end - start) / reach)
    
    answer += math.ceil((n + 1 - (stations[len(stations) - 1] + w + 1)) / reach)
    
    return answer