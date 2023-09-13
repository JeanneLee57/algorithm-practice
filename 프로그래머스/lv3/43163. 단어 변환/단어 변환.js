function solution(begin, target, words) {
  const checkOneDiff = (word1, word2) => {
    let countDiff = 0;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) countDiff++;
      if (countDiff > 1) return false;
    }
    return countDiff === 0 ? false : true;
  };
  const newWords = words.unshift(begin);
  let targetIdx = words.findIndex((el) => el === target);
  if (targetIdx === -1) return 0;

  const n = words.length;
  const visited = Array.from({ length: n }).fill(0);
  const bfs = (start) => {
    let q = [];
    q.push(start);
    while (q.length) {
      const current = q.shift();
      for (let i = 1; i < n; i++) {
        const next = i;
        if (visited[next] === 0 && checkOneDiff(words[current], words[next])) {
          q.push(next);
          visited[next] = visited[current] + 1;
        }
      }
    }
  };
  bfs(0);
  return visited[targetIdx];
}