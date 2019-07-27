const http= require("http");
const serve=http.createServer((req, res) => {
    console.log("req"+req,"res",res);
    res.end("ster")
})
serve.listen(5000)