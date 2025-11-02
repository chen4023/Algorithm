const fs = require('fs');
const [N, M] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

let visited = Array.from(N + 1).fill(false);
let path = [];
let result = [];

function backtrack(depth) {
  if (depth === M) {
    result.push(path.join(' '));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      path.push(i);
      backtrack(depth + 1);
      path.pop();
      visited[i] = false;
    }
  }
}

backtrack(0);
console.log(result.join('\n'));
