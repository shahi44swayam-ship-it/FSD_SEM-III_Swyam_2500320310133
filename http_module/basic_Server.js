import http from 'http'
import fs from 'fs'




const server = http.createServer((req, res) => {
    console.log("Hello world")
    const order ={
        orderId: 12341,
        des:"Delhi",
        source:"GZB",
        username:"Swyam"
    };

const data = fs.readFileSync("index.html") 
  console.log('${data}')
     res.writeHead(200, {
        "Content-Type": "application/json",
        "custom-header": "Hello ECE"
    })
    res.end(JSON.stringify(order))
})

server.listen(9000,"127.0.0.1", () => {
    console.log("Server is running on port 9000")
})