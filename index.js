
const express = require('express');
const app = express();
const PORT = 3001

const homeRoute = require('./src/routes/home');
const aboutRoute = require('./src/routes/about');



// Use Route 
app.use(homeRoute);
app.use(aboutRoute);








app.listen(PORT, ()=>{
    console.log(`Server is running on port is ${PORT}`)
})