var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
//app.use(bodyParser.json());

var sql = require("mssql");
const { request, response } = require('express');
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

router.post('/', function (req, res) {
    
    var request = new sql.Request();
    // .input('email',sql.VarChar , req.body.email)
    // .input('password',sql.VarChar , req.body.password)
    
    request.query("SELECT * FROM Employee where email ='"+req.body.email+"' and password = '"+req.body.password+"'", function(err, result)  {

        if (err){
            console.log({err:err});
        }
    
        if (result.recordset.length > 0)
        {
            res.send(result);
        }
        else{
            res.send({message:"Wrong user name/password"});
        }
        
    });
});

module.exports = router;