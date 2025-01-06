const express = require("express");
const path = require('path');
const app = express();
const port =80;

//EXPRESS SPECIFIC
app.use('/static', express.static('static'));

//PUG SPECIFIC
app.set('view engine','pug');
app.set('views', path.join(__dirname, 'views'));

//ENEPOINTS
app.get('/',(req,res)=>{
    const con = "Get Gym membership of 30$ for 3 months!!!";
    const params = {'title':'pub is used in express for html','content':con}
    res.status(200).render('index.pug',params)
})

//START THE SERVER
app.listen(port, ()=>{
    console.log(`Server running at ${port}/`);
})


