import http from 'http';

const arr = [{
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

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": 'application/json' })
    res.end(JSON.stringify(arr))

})

server.listen(3000, () => {
    console.log('Server is listening on port 3000')
})
