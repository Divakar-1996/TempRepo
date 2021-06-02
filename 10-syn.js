const {readFileSync,writeFileSync}  = require('fs')

console.log('start')
const first = readFileSync('./subfolder/first.txt','utf8')
const second = readFileSync('./subfolder/test.txt','utf8')

console.log(first,second)


writeFileSync('./subfolder/result-sync.txt',
`here is the result:${first},${second}`,
{flag:'a'})
