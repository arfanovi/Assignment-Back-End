const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
    res.send('This is Home Page');
    res.end();
})


module.exports = router;