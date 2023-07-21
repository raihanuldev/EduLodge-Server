const express = require('express');
const port = process.env.PORT || 5000;
require('dotenv').config()
const app = express();
const cors = require('cors');

// Middile Ware
app.use(cors())
app.use(express.json())


app.get('/',(req,res)=>{
    res.send('Asslamualikom Server Is Running')
})

app.listen(port,()=>{
    console.log('Hey! Developer!! No Pain No Gain');
    console.log(`Server is Running On Port ${port}`);
})