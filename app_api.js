// Requiring module
const express = require('express');
const path = require('path')
// Creating express object
const app = express();
 
// Handling GET request
app.get('/', (req, res) => {
    res.send('A simple Node App is '
        + 'running on this server')
    res.end()
})

app.get('/client', (req,res)=>{
    res.sendFile('queue.html',{
        root: path.join(__dirname,"./")
    })
})

// Port Number
const PORT = process.env.PORT ||8000;
 
// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));