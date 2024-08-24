
const express = require('express');
const app = express();
const PORT = 3001

const homeRoute = require('./src/routes/home');



// Use Route 
app.use(homeRoute);








app.listen(PORT, ()=>{
    console.log(`Server is running on port is ${PORT}`)
})