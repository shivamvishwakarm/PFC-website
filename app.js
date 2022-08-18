const { config } = require('dotenv');
const express = require('express');
const ejs = require('ejs');
var mongoose = require('mongoose');
const https = require("https");
const bodyParser = require('body-parser');
const path = require('path')
require('dotenv').config();
const app = express()
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Stlabishing the connections mongodb database 
mongoose.connect('mongodb+srv://admin-shivam:Test123@cluster0.wwzsn.mongodb.net/contact_pfc');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
  console.log("Connection Successful!");
});


// Creating a schema for database where contact info is stored
var ContactSchema = mongoose.Schema({
  name: String,
  email: String,
  contactNo: Number,
  message: String
});

var Contact = mongoose.model('Contact_Form', ContactSchema, Contact);

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/contact', (req, res) => {
    res.render('contact');
});

app.post('/contact',(req,res)=>{
   let name =  req.body.Name
   let email =  req.body.Email
   let number =  req.body.ContactNo
   let message =  req.body.Message


   var contacts = new Contact({ name: name, email: email, contactNo: number, message: message});


   contacts.save( (err, contact)=> {
     if (err) return console.error(err);
     console.log(Contact.name + " saved to contact collection.");
     res.redirect("/contact")
   });
});



let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, () => {
  console.log(`Server has started`)
})