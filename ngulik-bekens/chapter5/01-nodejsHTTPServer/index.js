const http = require("http");
const PORT = process.env.PORT || 8000; // ambil port dari environment variable
const server = http.createServer(function onRequest(req, res) {
    switch(req.url) {
        case "/":
            if(req.method === "GET") {
                res.writeHead(200);
                res.end("Hello, world");
            };
            break;
        case "/api/v1/login":
            if(req.method === "POST"){
                res.writeHead(201);
                res.end("Masoookkk cuy!");
            }
            break;
        default:
            res.writeHead(404);
            res.end("Mau kemana bos?");
    }
});


server.listen(PORT, () => {
    console.log(`Server nyala di http://localhost:${PORT}`);
})