var express = require("express");
var bodyparser= require("body-parser");
 
var aps = express();
aps.use(bodyparser.urlencoded({extended: false}))
 
aps.post('/iseven', (req, res) => {
    var num1 =parseInt(req.body.getnum1);
    if (num1%2==0)
    {
        var even= num1;
        res.json( { "even num":num1});
    }
        
    else
    {
        var odd= num1;
        res.json( { "odd num":num1});
    }
    
   
});
aps.listen(process.env.PORT|| 3600, () => {
    console.log("server started");
   });