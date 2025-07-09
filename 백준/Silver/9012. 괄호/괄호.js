const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const results = []
for(let i=0; i<n; i++) {
    const stack = [];
    let isVaild = true;
    const str = input[i+1];
    
    for(let j=0; j<str.length; j++){
        const char = str[j];
        if(char === '('){
            stack.push(char)
        } else if (char === ')'){
            if(stack.length === 0) {
                isVaild = false;
                break;
            }
            stack.pop()
        }
    }
    if(stack.length > 0) {
        isVaild = false;
    }
    results.push(isVaild ? "YES" : "NO")
}

console.log(results.join('\n'));