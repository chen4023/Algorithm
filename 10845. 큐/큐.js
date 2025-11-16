const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
let queue = [];
let result = [];

for (let i = 1; i <= N; i++) {
  let commandLine = input[i].split(" ");
  let cmd = commandLine[0];
  switch (cmd) {
    case "push":
      queue.push(Number(commandLine[1]));
      break;
    case "pop":
      !queue.length ? result.push(-1) : result.push(queue.shift());
      break;
    case "size":
      result.push(queue.length);
      break;
    case "empty":
      !queue.length ? result.push(1) : result.push(0);
      break;
    case "front":
      !queue.length ? result.push(-1) : result.push(queue[0]);
      break;
    case "back":
      !queue.length ? result.push(-1) : result.push(queue[queue.length - 1]);
      break;
    default:
      break;
  }
}
console.log(result.join("\n"));
