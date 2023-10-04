def solution(genres, plays):
    dict1 = {}
    dict2 = {}
    for i, genre in enumerate(genres):
        if genre in dict1: 
            dict1[genre] += plays[i]
        else:
            dict1[genre] = plays[i]
    
    for j, music in enumerate(zip(genres, plays)):
        if music[0] in dict2:
            dict2[music[0]].append([music[1], j])
        else:
            dict2[music[0]] = [[music[1], j]]
    
    genre_list = sorted([[key, dict1[key]] for key in dict1], key = lambda x: x[1], reverse = True)
    
    answer = []
    for g in genre_list:
        sorted_list = sorted(dict2[g[0]], key = lambda x: x[0], reverse = True)[:2]
        for el in sorted_list:
            answer.append(el[1])

    return answer