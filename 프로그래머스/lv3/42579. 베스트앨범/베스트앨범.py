def solution(genres, plays):
    album1 = {}
    album2 = {}
    answer = []
    for idx, (genre, play) in enumerate(zip(genres, plays)):
        if genre not in album1:
            album1[genre] = [(idx, play)]
        else: album1[genre].append((idx, play))
        
        if genre not in album2:
            album2[genre] = play
        else: album2[genre] += play
    
    for (key, value) in sorted(album2.items(), key = lambda x: x[1], reverse=True):
        for (idx, play) in sorted(album1[key], key = lambda x: x[1], reverse=True)[:2]:
             answer.append(idx)
    
    return answer