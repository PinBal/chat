var express = require('express')
var AccessControl = require('express-ip-access-control');
var app = express()


var options = {
    mode: 'allow',
    allows: ['195.199.226.74'],
    forceConnectionAddress: false,
    log: function(clientIp, access) {
        console.log(clientIp + (access ? ' accessed.' : ' denied.'));
    },

    statusCode: 401,
    redirectTo: '',
    message: 'Unauthorized'
};

var middleware = AccessControl(options);
 app.use(AccessControl(options));


app.get('/', function (req, res) {
  res.end('nacsaa');
});

app.listen(3000, function () {
  console.log(' app listening on port 3000!')
})
