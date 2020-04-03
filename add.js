var express = require("express");
var bodyparser= require("body-parser");
 
var apps = express();
apps.use(bodyparser.urlencoded({extended: false}))
 
apps.post('/addition', (req, res) => {
    var num1 =parseInt(req.body.getnum1);
    var num2=parseInt(req.body.getnum2);
    var num3= num1+num2;
    res.json({"sum=":num3});
});
apps.listen(process.env.PORT|| 3000, () => {
    console.log("server started");
   });
