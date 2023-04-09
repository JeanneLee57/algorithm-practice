function solution(strings, n) {
  //sort:  || 를 써서 같으면 뒤의 조건이 실행되게
  function compare(a, b) {
    if (a[n] === b[n]) return 0;
    return [a[n], b[n]].sort()[0] === a[n] ? -1 : 1;
  }
  return strings.sort().sort(compare);
}
