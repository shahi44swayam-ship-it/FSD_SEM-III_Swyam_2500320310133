import http from "http";    
const server = http.createServer((req, res) => {
    console.log("Hello world")
    console.log("Request URL:", req.url);
    res.end("hello from the server")}
    else if (req.url === "/about") {res.end("ablout page")}}};
    server.listen(3000, "127.0.0.1", () => {
        console.log("Server is running on http://127.0.0.1:3000")
    }))