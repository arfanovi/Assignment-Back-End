
const express = require('express');
const app = express();
const PORT = 3001

const homeRoute = require('./src/routes/home');
const aboutRoute = require('./src/routes/about');
const contactRoute = require('./src/routes/contact');
const writeFile = require('./src/routes/fileWrite')

// Use Route 
app.use(homeRoute);
app.use(aboutRoute);
app.use(contactRoute);
app.use(writeFile)

// Error Handle 
app.use((req, res)=>{
    res.status(404).send('404 Page Not Found')
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port is ${PORT}`)
})