const express = require('express');
const fs = require('fs');
const router = express.Router();



router.get('/fileWrite', (req, res)=> {
    fs.writeFile('demo.txt', 'File Write Finished',(err)=> {
        if(err) {
            res.status(500).send("Failed to Write File")
        } else {
            res.send("File demo.txt has been created with * File Write Finished")
        }
        res.end();
    })
})


module.exports = router;