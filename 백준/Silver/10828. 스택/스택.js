const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const stack=[];
const result = [];

for(let i=0; i<= input.length-1; i++) {
    const command = input[i].split(' ');
    
    if(command[0] === 'push') {
        stack.push(parseInt(command[1]));
    } else if (command[0] === 'pop') {
        result.push(stack.length > 0 ? stack.pop() : -1)
    } else if (command[0] === 'size') {
        result.push(stack.length)
    } else if (command[0] === 'empty') {
        result.push(stack.length === 0 ? 1:0)
    } else if (command[0] === 'top') {
        result.push(stack.length === 0 ? -1 : stack[stack.length-1])
    }
}

console.log(result.join('\n'))