var express=require('express');
var app=express();
var num=require('./lib/randnum.js');
//console.log(num.getNum());
app. use(express. static(__dirname + '/public' ));
var handlebars=require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
app.set('port',process.env.port||3500);
app.get('/',function(request,response){//Default code is 200
    response.render('home');
});
app.get('/about',function(request,response){
    response.render('about',{number:num.getNum()});//{message: 'welcome' ,style: req. query. style,userid: req. cookie. userid,username: req. session. username,}
});
app.get('/headers',function(request,response){
    response.set('Content-Type','text/plain');
    var s='';
    for(var name in request.headers) s+= name+':'+request.headers[name]+'\n';
    response.send(s);
});
app.get('/no-layout',function(request,response){
    response.render('No-layout',{layout:null});
});
app.get('/custom',function(request,response){
    response.render('custom-layout',{layout:'custom'});
});
app.use(function(request,response){
    //response.status(404);
    response.render('404');
});
app.use(function(err,response,request,next){
    console.error(err.stack);
    //response.status(500);
    response.render('500');
});
app.listen(app.get('port'),function(){
    console.log("Running in localhost:"+app.get('port')+"Ctrl C to terminate");
});