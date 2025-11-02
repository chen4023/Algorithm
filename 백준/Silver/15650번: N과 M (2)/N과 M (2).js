const fs = require('fs');
const [N, M] = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

let result = [];
let path = [];

function backtrack(start, depth) {
  if (depth === M) {
    result.push(path.join(' '));
    return;
  }

  for (let i = start; i <= N; i++) {
    // push 하기 전에 오름차순 검증해야함
    // i의 시작을 인자로 받은 start 이후부터 검증
    path.push(i);
    backtrack(i + 1, depth + 1);
    path.pop();
  }
}

backtrack(1, 0);
console.log(result.join('\n'));
