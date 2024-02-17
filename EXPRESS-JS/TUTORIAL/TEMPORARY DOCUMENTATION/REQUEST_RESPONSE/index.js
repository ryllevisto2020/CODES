const express = require('express');
const body_parser = require('body-parser');
const cookie_parser = require('cookie-parser');
const cors = require('cors');
const express_session = require('express-session');
const app = express();

app.use(express_session({secret: 'secret'}))
app.use(cors());
app.use(cookie_parser());
app.use(body_parser({extended: true}));

//REQUEST 
app.get('/request/:id?', function(req, res) {

    //ALL REQUEST
    //console.log(req);

    //ROUTE PARAMETERS
    //console.log(req.params.id); // localhost.com/request/<1>

    //QUERY PARAMETERS
    //console.log(req.query.id); // localhost.com/request<?id=1>

    //BODY , FORM DATA , X-WWW-FORM-URLENCODED
    //console.log(req.body);

    //COOKIES
    //console.log(req.cookies);

    //HEADERS
    //console.log(req.headers)

    //SESSION
    //console.log(req.session.view = 1);

    res.end("This is a Test");
});

//RESPONSE
app.get('/response',function(req,res){
    
    //ALL RESPONSE
    //console.log(res);

    //END
    //res.end("This is a Test");

    //SEND
    //res.send("<h1>This is a Test</h1>");

    //JSON
    //res.json([{id:1,name:'visto'}]);

    //DOWNLOAD
    //res.download("package.json");

    //SENDFILE
    //res.sendFile(__dirname+'//sendfile.txt');

    //HEADERS
    //res.header('key', 'value');
    //res.send("This is a Test");

    //COOKIES
    //res.cookie('hello', 'world');
    //res.send("This is a Test");

    res.end("This is a Test");
});

app.listen("2030",function(){
    console.log("listening on port 2030");
});