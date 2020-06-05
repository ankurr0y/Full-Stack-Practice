var express=require('express');
var app=express();
app.set('port',process.env.port||3000);
app.use(function(req,res){
    res.type('text/plain');
    res.status(404);
    res.send('404-Not found');
});
app.use(function(err,res,req,next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500-Internal Error');
});
app.listen(app.get('port'),function(){
    console.log("Running in localhost:"+app.get('port')+"Ctrl C to terminate");
});