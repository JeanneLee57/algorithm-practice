function solution(s)
{
    if(s.length === 0) return 0
    if(s.length === 1) return 1
    let palindromeIdx = []
    for(let i=1; i<s.length; i++){
        if(s[i-1] === s[i]) palindromeIdx.push([i, 0])
        if(s[i-1] === s[i+1]) palindromeIdx.push([i, 1])
    }
    const distances = palindromeIdx.reduce((acc, cur) => {
        let distance = 1
        const [idx, type] = cur
        if(type === 0){
            while(s[idx - distance] === s[idx + distance -1] && distance < Math.ceil(s.length / 2) + 1){
                distance++
            }
            acc.push((distance - 1) * 2 + type)
            return acc
        }
        if(type === 1){
            while(s[idx - distance] === s[idx + distance] && distance < Math.ceil(s.length / 2)) {
                distance++
            }
            acc.push((distance - 1) * 2 + type)
            return acc
        }
    }, [])
    if(distances.length === 0) return 1
    return Math.max(...distances)
}