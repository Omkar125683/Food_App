const express = require('express');
const app =express();
const cors = require('cors');
require('dotenv').config();
const dbconnect=require('./config/database');
const { default: mongoose } = require('mongoose');
const createUser = require('./Routes/CreateUser');
const showdata=require('./Routes/DisplayData');
const orders=require('./Routes/ordercreate')
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());
app.use((req,res,next)=>{
    res.setHeader('Acess-Control-Allow-Origin','http://localhost:5173');
    res.header(
         "Acess-Control-Allow-Headers",
         "Origin , X-Requested-With , Content-Type,Accept"   
    );
    next();
})
app.get('/',(req,res)=>{
    res.send('Hello');
})
app.use('/api/',orders);
app.use('/api/',createUser);
app.use('/api/',showdata);
app.listen(PORT,()=>{
    console.log('server is started');
})
dbconnect();