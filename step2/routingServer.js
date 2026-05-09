import http from 'http';
const server=http.createServer((req,res)=>{
    if(req.url==='/' && req.method==='GET'){
    res.writeHead(200,{"Content-type":"text/plain"})
    res.end('Hello this is the homepage')}
    else if(req.url==='/about' && req.method==='GET'){
        res.writeHead(200,{"content-type":"text-plain"})
        res.end('This is the about page')
    }
     else if(req.url==='/contsct' && req.method==='GET'){
        res.writeHead(200,{"content-type":"text-plain"})
        res.end('This is the contact page')
    }
    else{
        res.writeHead(404)
        res.end('404 page not found')
    }

})
server.listen(3000,()=>{
    console.log('Server is running on port 3000')
})
