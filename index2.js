const express = require ('express');
const app = express();


function middleWare(req,res,next){
    console.log("method is "+req.method);
    console.log("host is "+req.hostname);
    console.log("route is "+req.url)

    console.log(new Date());
    
    next();
}

app.use(middleWare);
app.get("/sum/:a/:b", function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json(
        {
        answer: a+b
    }
    )
});

app.get("/subtract", function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json(
        {
        answer: a-b
    }
    )
});

app.get("/Multiply", function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json(
        {
        answer: a*b
    }
    )
});

app.get("/divide", function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json(
        {
        answer: a/b
    }
    )
});

app.listen(3000);