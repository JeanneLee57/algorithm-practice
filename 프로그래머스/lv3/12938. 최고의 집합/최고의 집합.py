import math
def solution(n, s):
    base = math.trunc(s / n)
    if base == 0: return [-1] # 0이 무조건 들어가는 경우 전부 이렇게 되는 것인지 확인 필요
    answer = [base] * n
    rem = s - n * base
    
    i = 1
    while rem > 0:
        answer[-i] += 1
        rem -= 1
        i += 1
        if i == n: i = 0
        
    return answer