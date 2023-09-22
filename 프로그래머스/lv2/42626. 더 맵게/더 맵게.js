function solution(scoville, K) {
    let heap = [0]
    const insert = (newEl) => {
        let current = heap.length
        while(current > 1){
            let parent = Math.floor(current / 2)
            if(heap[parent] > newEl){
                heap[current] = heap[parent]
                current = parent
            } else break
        }
        heap[current] = newEl        
    }
    const remove = () => {
        heap[1] = heap[heap.length - 1]
        heap.splice(heap.length - 1)
        if(heap.length > 2){
            let current = 1
            let leftNode = current * 2
            let rightNode = current * 2 + 1
            while(heap[leftNode]){
                let nodeToCompare = leftNode
                if(heap[rightNode] && heap[nodeToCompare] > heap[rightNode]) nodeToCompare = rightNode
                if(heap[current] > heap[nodeToCompare]){
                    [heap[current], heap[nodeToCompare]] = [heap[nodeToCompare], heap[current]]
                    current = nodeToCompare
                } else break
                leftNode = current * 2
                rightNode = current * 2 + 1
            }
        } else return
    }
    scoville.forEach(el => {
        insert(el)
    })
    let answer = 0
    while(heap[1] < K){
        let newScoville = heap[1] + (Math.min(heap[2], heap[3] || Infinity) * 2)
        insert(newScoville)
        remove()
        remove()
        answer++
    }
    return heap.length > 1 ? answer : -1
}