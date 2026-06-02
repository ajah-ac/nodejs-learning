import stream from "stream";
import fs from 'fs'
const randomNumbers=Math.floor(Math.random()*100)+1
 
const writeToReadable=fs.writeFileSync('readableStream.txt',randomNumbers.toString())

const readableStream=fs.createReadStream('readableStream.txt',{
    encoding:'utf8'
})
const writable=fs.createWriteStream('writableStream.txt')
readableStream.on('data',(chunk)=>{
const num= Number(chunk)
if(num%2!==0){
    writable.write(num.toString())
}
})
readableStream.on("end", () => {
  writable.end();
  console.log("Done filtering odd  ther number");
});