var express = require("express");
var bodyparser= require("body-parser");
 
var app = express();
app.use(bodyparser.urlencoded({extended: false}))
 
app.get('/', (req, res) => {
 
 res.send("Hai...");
 
});
 
app.post('/gallery', (req, res) => {
    var name =req.query.getname;
    var roll=req.query.getroll;
    res.json(req.body);
});

app.listen(process.env.PORT|| 3234, () => {
 console.log("server started");
});