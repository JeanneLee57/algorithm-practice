function solution(brown, yellow) {
    var answer = [];
    //가로(x)가 더 길다
    //i는 y 기준
    let y = 0;
    let half = brown/2
    for(let i=1; i<=half; i++){
        if(i*(half-i+2) - 2*i - 2*(half-i+2) + 4 === yellow) y = i
    }
    return [y, brown/2 -y + 2];
}