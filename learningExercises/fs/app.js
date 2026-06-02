import fs from 'fs'
const readable=fs.readFileSync('data.txt','utf8')
const writable=fs.writeFileSync('writableData.txt',readable)
console.log(fs.readFileSync('writableData.txt','utf8'))