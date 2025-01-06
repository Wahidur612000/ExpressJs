const express = require("express");
const path = require('path');
const fs = require('fs');
const app = express();
const port =80;

//EXPRESS SPECIFIC
app.use('/static', express.static('static'));
app.use(express.urlencoded())

//PUG SPECIFIC
app.set('view engine','pug');
app.set('views', path.join(__dirname, 'views'));

//ENEPOINTS
app.get('/',(req,res)=>{
    const con = "Get Gym membership of 30$ for 3 months!!!";
    const params = {'title':'pub is used in express for html','content':con}
    res.status(200).render('index.pug',params)
})

app.post('/',(req,res)=>{
    names = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    let outputToWrite = `the name of the member is ${names}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`

    fs.writeFileSync('output.txt',outputToWrite)
    const params = {'message':'Your form has been submitted successfully'}
    res.status(200).render('index.pug',params)
})

//START THE SERVER
app.listen(port, ()=>{
    console.log(`Server running at ${port}/`);
})


