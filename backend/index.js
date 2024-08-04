const express = require("express");
const indexRouter = require("./routers/index.route.js");

const app = express();
const PORT = 3001;

app.use('/', indexRouter);

app.listen(PORT,()=>{
    console.log(`Listening at: ${PORT}`);
});