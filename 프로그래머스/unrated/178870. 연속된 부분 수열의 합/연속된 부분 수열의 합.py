def solution(sequence, k):
    length = len(sequence)
    l, r = length-1, length-1
    cur_sum = sequence[length - 1]
    
    while l >= 0:
        if cur_sum < k:
            l -= 1
            cur_sum += sequence[l]
        elif cur_sum > k:
            if l == r:
                l -= 1
                r -= 1
                cur_sum = sequence[l]
            else:
                cur_sum -= sequence[r]
                r -= 1
        elif cur_sum == k:
            if sequence[l-1] == sequence[l] and sequence[l] == sequence[r] and l != 0:
                l -= 1
                r -= 1
            else: break
            # if sum(sequence[l-1:r]) == cur_sum:
            #     l -= 1
            #     r -= 1
            # else: break

    return [l, r]