from itertools import permutations

def solution(user_id, banned_id):
    def check(b, u):
        if len(b) != len(u): return False
        else:
            for i in range(0, len(b)):
                if b[i] == '*' or b[i] == u[i]:
                    if i == len(b) - 1:
                        return True
                else: return False
    answer = []
    for unit in list(permutations(user_id, len(banned_id))):
        for i in range(0, len(banned_id)):
            if not check(banned_id[i], unit[i]): break
            elif i == len(banned_id) - 1 and set(unit) not in answer: answer.append(set(unit))
    return len(answer)