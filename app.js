var express	= require('express');

var app = express();

app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.set('view options', {layout:false});
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.render('index');
});

app.listen(3000);
