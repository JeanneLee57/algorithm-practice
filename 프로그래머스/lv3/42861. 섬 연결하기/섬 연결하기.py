def solution(n, costs):
    
    def find_parent(parent, n):
        if parent[n] != n: parent[n] = find_parent(parent, parent[n])
        return parent[n]
    
    def union_parent(parent, a, b):
        a = find_parent(parent, a)
        b = find_parent(parent, b)
        if a < b: parent[b] = a
        else: parent[a] = b
     
    sorted_costs = sorted(costs, key = lambda x: x[2])
    parent = [i for i in range(n)]
    answer = 0
    
    for x, y, cost in sorted_costs:
        if find_parent(parent, x) != find_parent(parent, y):
            union_parent(parent, x, y)
            answer += cost
    
    return answer