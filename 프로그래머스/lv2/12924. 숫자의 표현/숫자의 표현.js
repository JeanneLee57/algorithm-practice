function solution(n) {
  let answer = 0;
  function findSuccessive(target) {
    let limit = Math.sqrt(2 * target);
    for (let count = 1; count < limit; count++) {
      let initialValue = (-count * count + count + 2 * target) / (2 * count);
      if (Number.isInteger(initialValue)) answer++;
    }
  }
  findSuccessive(n);
  return answer;
}