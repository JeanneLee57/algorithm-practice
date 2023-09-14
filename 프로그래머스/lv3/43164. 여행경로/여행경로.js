function solution(tickets) {
    const l = tickets.length
    const answers = []
    let visited = Array.from({length: l}).fill(0)
    const dfs = (depth, routes) => {
        if(depth === l) answers.push(routes)
        tickets.forEach((ticket, idx) => {
            const [dep, arr] = ticket
            if(!visited[idx] && routes[routes.length -1] === dep){
                visited[idx] = 1
                dfs(depth+1, [...routes, arr])
                visited[idx] = 0
            }
        })
        
    }
    dfs(0, ['ICN'])
    return answers.sort()[0]
}