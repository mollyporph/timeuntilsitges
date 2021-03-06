var express = require('express');
var http = require('http');
var app = express();
app.set('port', process.env.PORT || 3000);
app.engine('html', require('ejs').renderFile);
app.use(express.static('Script'));
app.use(express.static('Styles'));
app.get('/',function(req,res)
{
  res.render('index.html');
})
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});