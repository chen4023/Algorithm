const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();
const N = Number(input);

function nQueen(N) {
  let result = 0;
  const cols = Array(N).fill(false); // 아래 놓을 수 있나
  const diag1 = Array(2 * N - 1).fill(false); // 왼쪽 대각선
  const diag2 = Array(2 * N - 1).fill(false); // 오른쪽 대각선

  function btr(row) {
    if (row === N) {
      // 마지막행까지 온거
      result++;
    }

    for (let col = 0; col < N; col++) {
      let d1 = row - col + (N - 1); // 정해짐 (그림 그려보면 됨)
      let d2 = row + col;

      if (!cols[col] && !diag1[d1] && !diag2[d2]) {
        // 셋다 공격할 대상이 없음 (셋다 false)
        cols[col] = true;
        diag1[d1] = true;
        diag2[d2] = true;
        btr(row + 1); // 재귀로 아래줄 계속 탐색

        cols[col] = false;
        diag1[d1] = false;
        diag2[d2] = false;
      }
    }
  }
  btr(0);
  return result;
}

console.log(nQueen(N));
