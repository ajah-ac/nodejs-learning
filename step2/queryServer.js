import http from 'http';
import url from 'url'
const server = http.createServer((req, res) => {
    const parSedurl = url.parse(req.url, true)

    if (parSedurl.pathname === '/greet' && parSedurl.query.name==="John"){
        res.writeHead(200, { "Content-Type": 'text/html' })
res.end('<h1>Hello John</h1>')
        
    }


})
server.listen(3000, () => {
    console.log('Server listening on port 3000')
})
