const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('test1.ejs');
  });
  
app.get('/test2', (req, res) => {
    res.render('test2.ejs');
  });

app.get('/test3', (req, res) => {
    res.render('test3.ejs');
  });
  
app.get('/test4', (req, res) => {
   res.render('test4.ejs'); 
 });

app.get('/test5', (req, res) => {
  res.render('test5.ejs');
 });  

app.get('/test6', (req, res) => {
    res.render('test6.ejs');
});

app.listen(3000);