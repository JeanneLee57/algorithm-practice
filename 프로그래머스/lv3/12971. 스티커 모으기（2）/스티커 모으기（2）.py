def solution(sticker):
    l = len(sticker)
    case1 = [0 for _ in range(l)]
    case2 = [0 for _ in range(l)]

    for i in range(l):
        if i == 0:
            case1[i] = sticker[0]
        elif i == 1:
            case1[i] = sticker[0]
            case2[i] = sticker[1]
        else:
            case1[i] = max(case1[i-1], case1[i-2] + sticker[i])
            case2[i] = max(case2[i-1], case2[i-2] + sticker[i])
    
    return max(case1[l-2], case2[l-1])
