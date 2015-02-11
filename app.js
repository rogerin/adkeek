var http = require('http');
var app  = require('./config/express')();
//require('./config/passport')();
//require('./config/database.js')('mongodb://localhost/adkeek');
require('./config/database.js')('mongodb://adkeek:adkeek@ds041861.mongolab.com:41861/adkeek');



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express Server escutando na porta ' + 
              app.get('port'));
});