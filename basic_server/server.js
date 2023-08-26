// Q.3_Create a Basic Server with Different Routes using Express
// " `/` → send response as {msg:`I am homepage`}
// " `/about` → send response as {msg:`I am about page`}
// " `/contact ` → send response as {email`suppor#@pwskills.com`}
const express = require('express')

const server = express();
const port = 5000;

server.get("/",(req,res) => {
    res.send({message: 'I am Homepage'})
})

server.get('/about',(req,res) => {
    res.send({message:'I am about page'})
})

server.get('/contact',(req,res) => {
    res.send({email:'support@pwskills.com'})
})

server.listen(port,()=>{
console.log(`Server is running on port ${port}`);
})


