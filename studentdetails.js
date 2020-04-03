var express = require("express");
var bodyparser= require("body-parser");
 
var student= express();
student.use(bodyparser.urlencoded({extended: false}))
 
student.post('/student', (req, res) => {
    var name =parseInt(req.body.getname);
    var rollno=parseInt(req.body.getroll);
    var adminno= parseInt(req.body.getadmin);
    var college= parseInt(req.body.getcollege);
    res.json(req.body);
});

student.listen(process.env.PORT|| 3000, () => {
 console.log("server started");
});