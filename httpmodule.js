const http =require('http')

const server =http.createServer((req,res)=>{
    res.write("Hey....!Welcome to our home page")
    res.end()
})

server.listen(6000)