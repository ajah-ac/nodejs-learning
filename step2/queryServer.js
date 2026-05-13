import http from 'http';
import url from 'url'
const server=http.createServer((req,res)=>{
    
    const parsedUrl={
        pathname:'/',
        query:{
            name:'John'
        }
    }
    if(parsedUrl.pathname==='/' && parsedUrl.query==='John'){
        res.writeHead(200,{"Content-Type":'text/html'})
            res.end('<h1>Hello John</h1>')
        
    }


})
server.listen(3000,()=>{
    console.log('Server listening on port 3000')
})
      