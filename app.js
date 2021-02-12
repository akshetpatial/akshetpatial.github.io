const express = require('express');
const path = require('path');
const f= require("fs");
//const bodyparser=require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Userdata', {useNewUrlParser: true, useUnifiedTopology: true});

//define mongoose schema
const schema = new mongoose.Schema(
    { NAME: String ,
      Email: String ,
     Phone: String ,
     Comments: String }
    );
//creating model
const contact= new mongoose.model('Contact',schema);

const app  = express();
const port =800;

//for express to know the data of the submitter
app.use(express.urlencoded());

//for serving static file
app.use('/static',express.static('static'))

//set the template as html
app.set('view engine','html');
app.engine('html', require('ejs').renderFile);
//set the view directory
//app.set('views',path.join(__dirname,'WEB DEVELOPMENT 15'));

// End point
app.get('/',(req,res)=>
{
    // const fun= {'title':'this is web development'}
    res.sendFile(path.join(__dirname, 'index.html'));
  // res.sendFile(path.join(__dirname, 'akshet.html'));
    //res.status(200).render("index.html");
});
//FORM
// app.post('/',(req,res)=>
// {
//     console.log(req.body);
//     name=req.body.NAME;
//     email=req.body.Email;
//     phone =req.body.Phone;
//      Comments=req.body.Comments;
//     f.writeFileSync('usersfile.txt',`The Name of the user is ${name}, Email Id is ${email},
//     Phone number is ${phone}, Comments are ${Comments}`)
//     const fun= {'message':'you have successfully submitted your details'}
//     res.status(200).render("pugfile.pug",fun);
// });
//Form from database
app.post('/',(req,res)=>
 {
     var data = new contact(req.body);
     data.save().then(()=>
     {
         res.send("data has been saved");
     }).catch(()=>
     {
            res.status(404).send("sorry something wrong there. Try again later")
     })
 });
//start the server
app.listen(port,()=>
{
    console.log(`this application started successfully on port ${port}`);
})