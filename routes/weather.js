var express = require('express');
const { route } = require('.');
var request = require('request')
var router = express.Router();

router.get("/",(req,res)=>{
    request(
      "https://jsonplaceholder.typicode.com/users",
      function(error,response,body){
        response.send(body);
      }
    )
  })

  module.exports = router;