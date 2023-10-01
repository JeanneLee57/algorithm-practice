def solution(gems):
    all_gems = len(set(gems))
    size = len(gems)
    
    l = 1
    r = 1
    found_rightend = False
    gems_dict = {gems[0]: 1}
    min_length = 100000
    answer = []
    
    while l < size and r <= size:
        if len(gems_dict) != all_gems:
            r += 1
            if r > size: break
            if gems[r-1] in gems_dict: gems_dict[gems[r-1]] += 1
            else: gems_dict[gems[r-1]] = 1
        if len(gems_dict) == all_gems:
            if min_length > r - l: 
                min_length = r - l
                answer = [l, r]
            else:
                if gems_dict[gems[l-1]] == 1:
                    del gems_dict[gems[l-1]]
                else: gems_dict[gems[l-1]] -= 1
                l += 1

    if len(answer): return [answer[0], answer[1]]
    else: return [1, 1]
                            