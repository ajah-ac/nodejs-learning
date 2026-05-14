import http from 'http';
import url from 'url'
const jsonData = [{
    id: 1,
    name: 'apple',
    price: 200},{
    id: 2,
    name: 'orange',
    price: 300},{
    id: 1,
    name: 'mango',
    price: 100}
]
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
      res.writeHead(200,{'content-type':'text/plain'})
    res.end(`Search results for:${parsedUrl.query.q}`)
  }
  else if (pathname==='/api/products'){
    res.writeHead(200,{'content-type':'application/json'})
    res.end(JSON.stringify(jsonData))
  }
  else{
    res.writeHead(404,{'content-type':'text/plain'})
    res.end('404 - Page Not found')
  }
  
})




server.listen(3000,()=>{
    console.log('Server is lisstening on port 3000')
})