import fs, { existsSync } from 'fs'
export function readFile(fileName){
    fs.readFile(fileName,'utf8',(err,data)=>{
    if(err){
        console.log(err)
    }
else{
    console.log(data)   }})

}
export function writeFile(fileName){
    fs.writeFile(fileName,'Hello are you good',(err)=>{
if(err){
    console.log(err)
}else{
    console.log('Written SuccessFully')

}
    })
}
export function fileExists(fileName){
    if(existsSync(fileName)){
        console.log(`${fileName} exists`)

    }
    else{
        console.log(`${fileName} does not exist`)    }
}