
const express = require('express');
const app = express();
const PORT = 3001



app.get("/run", (req, res)=>{
    res.send("Okay")
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port is ${PORT}`)
})