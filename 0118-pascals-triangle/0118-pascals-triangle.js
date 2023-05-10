/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 1) return [[1]]

  const answer = [[1], [1,1]];
  for (let i = 2; i < numRows; i++) {
    answer[i] = Array(i + 1).fill(0)
    answer[i] = answer[i].map((cur, idx) => {
      if (idx === 0) return 1;
      if (idx === answer[i].length -1) return 1;
      else return answer[i - 1][idx - 1] + answer[i - 1][idx];
    });
  }
  return answer;
};