function solution(d, budget){
    let acc = 0;
    let idx = -1;
    d = d.sort((a,b) => a-b)
    do{
        idx++
        acc += d[idx];
    }while(acc <= budget)
    return idx;
}