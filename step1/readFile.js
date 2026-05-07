import fs from 'fs'
fs.readfile('./data.txt',(err,data)=>{
if(err){
    console.log(err)
}
else{
    console.log(data)
}

})