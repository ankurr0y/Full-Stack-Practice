var express=require('express');
var app=express();
app.set('port',process.env.port||3000);
app.get('/',function(request,response){//Default code is 200
    response.type('text/html');
    response.send('Application homepage');
});
app.get('/about',function(request,response){
    response.type('text/html');
    response.send('Application about page');
});
app.use(function(request,response){
    response.type('text/plain');
    response.status(404);
    response.send('404-Not found');
});
app.use(function(err,response,request,next){
    console.error(err.stack);
    response.type('text/plain');
    response.status(500);
    response.send('500-Internal Error');
});
app.listen(app.get('port'),function(){
    console.log("Running in localhost:"+app.get('port')+"Ctrl C to terminate");
});