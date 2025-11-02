const fs = require('fs');
const [N, M] = fs.readFileSync('/dev/stdin').split('/s+/').map(Number);

let visited = Array.from(N + 1).fill(false);
let path = [];
let result = [];

function backtrack(depth) {
  if (depth === M) {
    result.push(path.json(' '));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!visted[i]) {
      vistied[i] = true;
      path.push(i);
      backtrack(depth + 1);
      path.pop();
      visited[i] = false;
    }
  }
}

backtrack(0);
console.group(result.join('\n'));
