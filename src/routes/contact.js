const express = require('express');
const router = express.Router();


router.get('/contact', (req, res)=>{
    res.send("This is Contact Page");
    res.end();
})


module.exports = router;