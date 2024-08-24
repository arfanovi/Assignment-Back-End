const express = require('express');
const router = express.Router();


router.get('/about', (req, res)=>{
    res.send("This is About Page")
    res.end();
})


module.exports = router;