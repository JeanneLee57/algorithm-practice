function solution(numbers) {
    // function isPrime(n){
    //     if (n < 2) return false;
    //     const sqr = Math.ceil(Math.sqrt(n))
    //     for(let i=2; i<=sqr; i++){
    //         if(!(n%i)) return false
    //     }
    //     return true
    // }
    const isPrime = (num) => { // 에라토스테네스의 체
    if (num < 2) return false;
    for (let i=2; i<=parseInt(num**0.5); i++) {
        if (!(num % i)) return false;
    }
    return true;
}
    
    let answer = 0
    const set = new Set()
    const visited = Array(numbers.length).fill(0)
    
    function getPermutations(depth, str){
        if(depth === numbers.length) return;
        for(let i=0; i<numbers.length; i++){
            if(!visited[i]){
                visited[i] = 1
                set.add(parseInt(str+numbers[i]))
                getPermutations(depth+1, str+numbers[i])
                visited[i] = 0
            }
        }
    }
    getPermutations(0, '')
    set.forEach(el => {
        if(isPrime(el)) answer++
    })
	return answer
}