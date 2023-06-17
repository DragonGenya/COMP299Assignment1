//-File Name: server.js Student's Name: Evgueni Antysferov StudentID: 301324790 Date: June, 09, 2023
app.get('/', (req, res) => {
    res.render('Home')
 });
 const express = require('express');
const app = express();
// sets the view engine to EJS
app.set('view engine', 'ejs');
// directs Express to the public folder for 
stylesheets
app.use(express.static("public"));
// controller actions
app.get('/', (req, res) => {
   res.render('home')
});
app.get('/log', (req, res) => {
   res.render('log')
})
app.listen(3000, () => console.log('Server Started'))
app.get('/', (req, res) => {
    res.render('Conact')
 });
 const express = require('express');