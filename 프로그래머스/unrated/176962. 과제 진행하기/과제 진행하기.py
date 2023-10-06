def solution(plans):
    # 시작 순서대로 정렬
    # 다음 요소와 비교해서 gap이 playtime보다 적으면 playtime에서 gap만큼 빼서 스택에 넣는다(후입선출)
    # playtime과 gap이 같으면 result에 과제를 넣고 다음 요소에 있는 작업을 수행
    # playtime보다 크면 result에 넣고 큐에서 다음 과제를 꺼내서 수행
    # 만약 다 마치지 못할 경우()첫 요소로 다시 큐에 넣기
    
    length = len(plans)
    answer = []
    stack = []
    
    def timeToNum(string):
        return int(string[:2]) * 60 + int(string[3:5])

    plans = [[name, timeToNum(start), int(playtime)] for [name, start, playtime] in plans]
    plans.sort(key = lambda x: x[1])
    
    for idx, [name, start, playtime] in enumerate(plans):
        if idx == length - 1: gap = 1e9
        else: gap = plans[idx + 1][1] - start
        
        if gap < playtime:
            stack.append([name, playtime - gap])
        elif gap == playtime:
            answer.append(name)
        else:
            rest_time = gap - playtime
            answer.append(name)
            while len(stack) and rest_time > 0:
                [n_name, n_playtime] = stack.pop() # 과제를 하나 꺼낸다
                if rest_time < n_playtime: # 중단했던 과제를 다 끝내지 못할 때
                    stack.append([n_name, n_playtime - rest_time])
                    break
                else: # 과제를 다 끝낼 수 있을 때
                    answer.append(n_name)
                    rest_time -= n_playtime

    return answer
