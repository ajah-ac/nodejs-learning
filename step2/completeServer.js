import http from 'http';
import url from 'url'

const server=http.createServer((req,res)=>{
  const parsedUrl=url.parse(req.url, true)
  const pathname=parsedUrl.pathname
  if(pathname==='/'){
    res.writeHead(200,{"content-type":'text-plain'})
    res.end('Hello world!')
  }
  else if(pathname==='/about'){
    
    res.writeHead(200,{"content-type":'text-plain'})
    res.end('This is the about page!')
  }
  else if(pathname==='/greet' && parsedUrl.query.name==='John'){
    res.writeHead(200,{'content-type':'text-plain'})
    res.end('Hello John')
  }
  else if (pathname==='/search'){
      res.writeHead(200,{'content-type':'text-plain'})
    res.end(`Search results for:${parsedUrl.query.q}`)
  }
  
})




server.listen(3000,()=>{
    console.log('Server is lisstening on port 3000')
})