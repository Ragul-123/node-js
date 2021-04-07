var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
//app.use(bodyParser.json());

var sql = require("mssql");
const { request } = require('express');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json()); 
app.use(express.json());
app.use(express.urlencoded());

// config for your database
var config = {
    user: 'sa',
    password: 'aspire@123',
    server: 'ASPIRE1816\\MSSQLSERVER2017',
    database: 'Login_Details',
    options: {
        enableArithAbort: true,
        trustedconnection: true,
        instancename: 'MSSQLSERVER2017'
    },
    port: 1433
};

sql.connect(config, function (err) {
    if (!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});


router.post('/',function(req , res){
    
      if( req.body.email != null && req.body.password != null) {

        var request = new sql.Request()
        .input('email',sql.VarChar , req.body.email)
        .input('password',sql.VarChar,req.body.password)
        .query("INSERT INTO Employee (email,password) VALUES (@email,@password)",function (err) {
          
        
        if (!err)
          res.send(JSON.stringify("Employee Deleted Successfully."));
      
      else
          console.log('Invalid user');
  });
  }
});

module.exports = router;