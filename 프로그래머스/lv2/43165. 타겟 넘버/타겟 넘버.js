function solution(numbers, target) {
  //플러스 또는 마이너스..
  //모든 경우의 수를 탐색..
  //하나의 요소마다 두개의 경우의 수
  //현재 요소를 어디로 받지..???
  let answer = 0;
  const l = numbers.length;
  function DFS(n, sum) {
    if (n === l) {
      if(sum === target) answer ++;
      return;  
    }
      DFS(n+1, sum + numbers[n])
      DFS(n+1, sum - numbers[n])
  }
    DFS(0, 0)
  return answer;
}