/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1182                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: ads4023 <boj.kr/u/ads4023>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1182                           #+#        #+#      #+#    */
/*   Solved: 2025/11/17 01:27:32 by ads4023       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let count = 0;

function dfs(idx, sum) {
  if (idx === n) {
    if (sum === s) count++;
    return;
  }

  // 현재 원소 포함
  dfs(idx + 1, sum + arr[idx]);

  // 현재 원소 미포함
  dfs(idx + 1, sum);
}

dfs(0, 0);

// 공집합 제외
if (s === 0) count--;

console.log(count);
