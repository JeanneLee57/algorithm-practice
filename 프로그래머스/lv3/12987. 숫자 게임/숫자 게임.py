import heapq
def solution(A, B):
    # B의 최대값이 A의 최소값보다 작거나 같으면 0 리턴
    A = sorted(A)
    B = sorted(B)
    if A[0] >= B[-1]: return 0

    l = len(A)

    i = 0
    j = 0
    answer = 0
    
    while i < l and j < l:
        if A[i] < B[j]:
            answer += 1
            i += 1
            j += 1
        else:
            j += 1

    return answer