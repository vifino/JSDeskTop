var express		   = require('express'),
	express_uglify = require('express-uglify');

var app = express();

app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.set('view options', {layout:false});
//app.use(express_uglify.middleware({ src: __dirname + '/public' }));
app.use(express.static(__dirname + '/public', { maxAge: 1 }));

app.get('/', function(req, res){
	res.render('index');
});

app.listen(3000);
