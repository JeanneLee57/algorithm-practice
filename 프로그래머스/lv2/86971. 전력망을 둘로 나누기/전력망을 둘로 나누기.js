/* 인접 행렬 이용한 방법 */
function solution(n, wires) {
    const graph = Array.from({length: n + 1}, () => Array(n + 1).fill(0))
    const dfs = (arr, node) => {
        let res = 0
        for (let i = 1; i <= arr[node].length; i += 1) {
            if (arr[node][i]) { // 연결되어 있다면 방문 처리
                arr[node][i] = arr[i][node] = 0
                res += 1 + dfs(arr, i)
            } 
        }
        return res
    }
    let result = 100
    
    // 와이어 연결 정보 저장(인접 행렬 만들기)
    wires.forEach(wire => {
        graph[wire[0]][wire[1]] = graph[wire[1]][wire[0]] = 1
    })
    // 와이어를 하나씩 끊고 끊어진 각 노드 2개에 대하여 DFS수행 후의 차이를 계산
    wires.forEach(wire => {
        const copy = graph.map(v => v.slice());
        const [a, b] = wire
        copy[a][b] = copy[b][a] = 0
        result = Math.min(result, Math.abs(dfs(copy, a) - dfs(copy, b)))
    })
    return result
}