var http=require('http');
http.createServer(function(req,res){
    var path =req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase();
    switch(path){
        case '':
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end("Homepage");
            break;
        case '/about':
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end("About");
            break;
        default:
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end("Not found");
            break;
    }
}).listen(3000);
console.log("Localhost:3000; Ctrl C to escape");