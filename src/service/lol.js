

const fs = require('fs')
const data  = fs.readFileSync('./tect.txt','utf-8')
// fs.readFile('./tect.txt','utf-8',(err,path)=>{
//     console.log(path)
// })

console.log(data)
console.log('helo world')