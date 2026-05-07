import fs, { existsSync } from 'fs'
export function readFile(filename){
    fs.readFile('fileName','utf8',(err,data)=>{
    if(err){
        console.log(err)
    }
else{
    console.log(data)   }})

}
export function WriteFile(fileName){
    fs.writeFile('fileName','Hello are you good',(err)=>{
if(err){
    console.log(err)
}else{
    console.log('Written SuccessFully')

}
    })
}
export function fileExists(fileName){
    if(existsSync(fileName)){
        console.log(`${filename} exists`)

    }
    else{
        console.log(`${filename} does not exist`)    }
}