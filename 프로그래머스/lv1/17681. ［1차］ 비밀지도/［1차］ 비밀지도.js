function solution(n, arr1, arr2) {
        
    var answer = [];
    
    function mapGen(a, b){
    let n1 = a.toString(2).padStart(n, '0');
    let n2 = b.toString(2).padStart(n, '0');
    let map = '';
    for(i=0; i<n; i++){
        if(!Number(n1[i]) && !Number(n2[i])) map += ' ';
        else map += '#'
    }
        return map;
    }
    
    for(let i=0; i<n; i++){
        answer.push(mapGen(arr1[i], arr2[i]))
    }

    return answer;
}