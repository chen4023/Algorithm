const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

function solution() {
  const n = Number(input[0]);
  // 친구 리스트 생성
  const graph = Array.from({ length: n + 1 }, () => []);
  // 친구 채우기
  for (let i = 1; i < n; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  // 부모 배열, 방문여부 배열 생성
  const parent = new Array(n + 1).fill(0);
  const visited = new Array(n + 1).fill(false);

  // 탐색 시작
  const queue = [1]; // 1번부터 탐색 시작
  // 큐가 비워질때 까지
  while (queue.length > 0) {
    const cur = queue.shift();
    for (const friend of graph[cur]) {
      if (!visited[friend]) {
        visited[friend] = true;
        parent[friend] = cur;
        queue.push(friend);
      }
    }
  }
  // 2번째 요소부터 반복문 실행
  for (let i = 2; i <= n; i++) {
    console.log(parent[i]);
  }
}

solution();
