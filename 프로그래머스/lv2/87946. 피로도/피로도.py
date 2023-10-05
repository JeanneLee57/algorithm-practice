from itertools import permutations
def solution(k, dungeons):
    l = len(dungeons)
    perm = list(permutations(dungeons, l))
    answer = 0
    for ds in perm: # 던전 리스트를 하나씩
        hp = k
        cnt = 0
        for j in range(l): # 던전을 하나씩
            if hp < ds[j][0]:
                break
            else:
                hp -= ds[j][1]
                cnt += 1
        answer = max(cnt, answer)
    return answer