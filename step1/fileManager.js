import fs from 'fs'
export function readFile(filename){
    fs.readFile('fileName','utf8',(err,data)=>{
    if(err){
        console.log(err)
    }
else{
    console.log(data)   }})

}