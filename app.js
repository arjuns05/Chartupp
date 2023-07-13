const express = require('express')
const router = require('/Users/amitsudhalkar/Software/VSCode/Chartupp/routes/routes.js')
const mongoose = require('mongoose')
var bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.set('view engine', 'ejs');

// app.use('/', router)
 
app.get("/",(req,res) => {
    res.render("index")
})





app.get("/new_user", (req,res) => {
    res.render("new_user")
})
app.get("/login", (req,res) => {
    res.render("login")
})







mongoose
.connect(
    "mongodb+srv://arjunsudhalkar:ug0uMkwQtvy4OoWl@cluster0.jhz1soq.mongodb.net/?retryWrites=true&w=majority"
)
.then(()=> app.listen(3100, ()=> console.log('running at 3100'))).catch((err)=>console.log(err))


//Schema Definition

const userSchema = new mongoose.Schema({
    username: String,
    password:String
});

var User = mongoose.model("User", userSchema )




//Controller

app.post('/', function(req,res){
    let newUser = new User({
        username: req.body.username,
        password: req.body.password
    })
    newUser.save();
    res.redirect('/new_user');
    })

// to find, use db.users.findOne(("Username": "username of user"))

// app.post('/login', async function(req,res){
//     user = await db.users.findOne((req.body.login_username))
//     if(!user){
//         res.send("Login unsuccesful")
//     }
//     else{
//         res.send('succesful login')
//     }

// })


