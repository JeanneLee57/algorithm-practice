function solution(clothes) {
    let clothesObj = {}
    let answer = 1
    for(let el of clothes){
        if(clothesObj[el[1]]) clothesObj[el[1]]++
        else clothesObj[el[1]] = 1
    }
    for(let key in clothesObj) {
        answer *= (clothesObj[key] + 1); 
    }
    return answer - 1;
}