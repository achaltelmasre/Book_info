 const express = require ('express');
 require('dotenv').config();
 const bodyParser =require ('body-parser');

 let book = [];

 const app =express();
 app.use(bodyParser.json());

 app.use(bodyParser.urlencoded({ extended: true}));


 const PORT = process.env.PORT || 3000;

 app.get('/' , (req,res) => {
     res.send('hello world');
 });

 app.post('/book',(req, res) => {
   console.log(req,body);
   
     res.send('Book Create');
  
 });

 app.get('/book',(req,res) => {

 })

 app.listen(3000,() => {
     console.log('server listening on port 3000');
 });