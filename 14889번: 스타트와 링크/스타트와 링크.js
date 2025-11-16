/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 14889                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: ads4023 <boj.kr/u/ads4023>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/14889                          #+#        #+#      #+#    */
/*   Solved: 2025/11/16 23:27:09 by ads4023       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const s = [];
for (let i = 1; i <= n; i++) {
  s.push(input[i].split(' ').map(Number));
}
// 팀원끼리의 능력치 계산하여 반환
function calculateTeamPower(team, s) {
  let power = 0;
  for (let i = 0; i < team.length; i++) {
    for (let j = i + 1; j < team.length; j++) {
      power += s[team[i]][team[j]] + s[team[j]][team[i]];
    }
  }
  return power;
}

let minDiff = Infinity;
// 팀조합
function makeTeam(idx, selected) {
  // start 팀이 찬 경우 link 팀 구성
  if (selected.length === n / 2) {
    const linkTeam = [];
    for (let i = 0; i < n; i++) {
      if (!selected.includes(i)) {
        linkTeam.push(i);
      }
    }
    // 팀 별 능력치 반환
    const startPower = calculateTeamPower(selected, s);
    const linkPower = calculateTeamPower(linkTeam, s);
    const diff = Math.abs(startPower - linkPower);
    // 기존 최소값과 비교
    minDiff = Math.min(minDiff, diff);
    return;
  }

  if (idx === n) return;

  selected.push(idx);
  makeTeam(idx + 1, selected);
  selected.pop();

  makeTeam(idx + 1, selected);
}

// 0번 사람은 항상 스타트 팀에 포함 (중복 제거)
makeTeam(1, [0]);
console.log(minDiff);
