function solution(n, lost, reserve) {
//양쪽에 있는 경우
let newLost = lost.filter((x) => !reserve.includes(x));
let newReserve = reserve.filter((x) => !lost.includes(x));
let answer = n - newLost.length;

//정렬
newLost = newLost.sort((a, b) => a - b);
newReserve = newReserve.sort((a, b) => a - b);

//-1 또는 +1이 있으면 reserve에서는 제거하고 answer에 +1
newLost.forEach((lostEl) => {
  //if(newReserve.length === 0 ) return;
  if (newReserve.includes(lostEl - 1)) {
    newReserve = newReserve.filter((x) => x !== lostEl - 1);
    answer++;
  } else if (newReserve.includes(lostEl + 1)) {
    newReserve = newReserve.filter((x) => x !== lostEl + 1);
    answer++;
  }
});

return answer;

     
    
    
    // return n - newLost.filter(a => {
    //     const b = newReserve.find(r => Math.abs(r-a) === 1)
    //     if(!b) return true
    //     newReserve = newReserve.filter(r => r !== b)
    // }).length
}
    
    