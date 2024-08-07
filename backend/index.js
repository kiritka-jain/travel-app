const express = require("express");
const indexRouter = require("./routers/index.route.js");
const db = require("./models/index.js");

const app = express();
const PORT = 3001;

// const data = async() =>  {
//     return await db.User.create({
        // name: 'Thomas',
        // loginId: 'thomas@yahoo.com',
        // password: 'frg',
        // roleId: 2
//       });
// }


// data()
//     .then(result => {
//         console.log(result); 
//     })
//     .catch(error => {
//         console.error('Error in data function:', error);
//     });
app.use(express.json());
app.use('/', indexRouter);

app.listen(PORT,()=>{
    console.log(`Listening at: ${PORT}`);
});