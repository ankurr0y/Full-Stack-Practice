var express=require('express');
var app=express();
app. use(express. static(__dirname + '/public' ));
var numbers=[1,2,3,172,37,273,328,273,19,93,73,5,83,19,38,73,476];
var handlebars=require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
app.set('port',process.env.port||3000);
app.get('/',function(request,response){//Default code is 200
    response.render('home');
});
app.get('/about',function(request,response){
    var randNum=numbers[Math.floor(numbers.length*Math.random())];
    response.render('about',{number:randNum});
});
app.use(function(request,response){
    response.status(404);
    response.render('404');
});
app.use(function(err,response,request,next){
    console.error(err.stack);
    response.status(500);
    response.render('500');
});
app.listen(app.get('port'),function(){
    console.log("Running in localhost:"+app.get('port')+"Ctrl C to terminate");
});