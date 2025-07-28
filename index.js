const express = require ('express');
const app = express();


let requestCounter = 0;

function countIncreaser(req,res,next){
    requestCounter = requestCounter +1;
    console.log(`the total number of requests =  ${requestCounter}`);
    next();
}


app.use(countIncreaser);
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