function solution(operations) {
    let result = []
    operations.forEach(op => {
        const [command, data] = op.split(' ')
        if(command === 'I') {
            result.push(parseInt(data))
        } else if(command === 'D'){
            result = result.sort((a,b) => a-b)
            if(result.length){
                if(data === '1') result.pop()
                else result.shift()
            }
        }
    })
    if(!result.length) return [0, 0]
    else {
        const sorted = result.sort((a,b) => a-b)
        return [sorted.pop(), sorted.shift()]
    }
}