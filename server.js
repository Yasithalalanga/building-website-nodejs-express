const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/',(req,res) => {
    res.send("Hello Express :)")
})

app.listen(port, () => {
    console.log(`Express Server Listning on port ${port}`)
});