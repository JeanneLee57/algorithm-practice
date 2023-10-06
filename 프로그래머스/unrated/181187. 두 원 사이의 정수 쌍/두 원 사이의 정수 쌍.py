import math
def solution(r1, r2):
    cnt = 0
    for x2 in range(0, r2+1):
        y2 = int(math.sqrt(r2 ** 2 - x2 ** 2))
        if x2 > r1:
            cnt += y2
        else:
            y1 = math.sqrt(r1 ** 2 - x2 ** 2)
            if y1 == int(y1):
                cnt += y2 - y1 + 1
            else: cnt += y2 - int(y1)
    return (cnt - 1) * 4