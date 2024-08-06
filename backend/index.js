const express = require("express");
const indexRouter = require("./routers/index.route.js");
const db = require("./models/index.js");

const app = express();
const PORT = 3001;

const data = async() =>  {
    return await db.User.findAll();
}


data()
    .then(result => {
        console.log(result); 
    })
    .catch(error => {
        console.error('Error in data function:', error);
    });

app.use('/', indexRouter);

app.listen(PORT,()=>{
    console.log(`Listening at: ${PORT}`);
});