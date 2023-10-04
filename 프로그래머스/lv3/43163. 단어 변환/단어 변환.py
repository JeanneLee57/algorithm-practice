import sys
sys.setrecursionlimit(10**6)

def solution(begin, target, words):
    l = len(begin)
    def check(word1, word2):
        count = 0
        for i in range(l):
            if word1[i] != word2[i]:
                count += 1
                if count >= 2: return False
        if count == 1: return True
        return False
            
    start = -1
    answer = 0
    visited = [0 for _ in range(len(words)+1)]
    def dfs(node, depth):
        nonlocal answer
        if words[node] == target: answer = depth
        for i, word in enumerate(words):
            cur_word = ''
            if node == -1: cur_word = begin
            else: cur_word = words[node]
            if not visited[i+1] and check(word, cur_word):
                visited[i+1] = 1
                dfs(i, depth+1)
                visited[i+1] = 0
    visited[0] = 1
    dfs(-1, 0)
    return answer