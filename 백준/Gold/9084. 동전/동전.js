const inputFile = process.platform === "linux" ? "/dev/stdin" : "./input";
const input = require("fs").readFileSync(inputFile).toString().trim().split("\n");
const T = parseInt(input[0]);

let sol = [];

for (let test = 0; test < T; test++) {
  const N = parseInt(input[3 * test + 1]);
  const coins = input[3 * test + 2].trim().split(" ").map(Number);
  const M = parseInt(input[3 * test + 3]);

  let dp = new Array(M + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < N; i++) {
    for (let j = coins[i]; j <= M; j++) {
      dp[j] += dp[j - coins[i]];
    }
  }

  sol.push(dp[M]);
}

console.log(sol.join("\n"));