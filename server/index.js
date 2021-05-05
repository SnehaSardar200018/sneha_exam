
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors=require("cors");
const { default: Register } = require("../src/components/register/Register");
const dbrl =
"mongodb+srv://admin:ilove3000@cluster0.xtcv9.mongodb.net/registerDatabase?retryWrites=true&w=majority";

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.use(cors())
app.use(bodyParser.json())

mongoose
  .connect(dbrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((res) => {
    console.log("Could not connect to database");
    process.exit();
  });

  app.post('/mailer',(req,res)=>
  {
  
      let mailTransporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
              user: req.body.fromEmail,
              pass: req.body.password,
          }
      });
        
      let mailDetails = {
          from: req.body.fromEmail,
          to: req.body.toEmail,
          subject: 'Test mail',
          text: body
      };
      mailTransporter.sendMail(mailDetails, function(err, data) {
          if(err) {
              console.log("ERROR:",err);
          } else {
              console.log('Email sent successfully');
          }
      });
  })  

  // Schema 
const RegisterSchema = mongoose.Schema(
  {
    name:"",
    email:"",
    password:"",
    role:""
  },
  {
    timestamps: true,
  }
);


// model 

const Register = mongoose.model("register", RegisterSchema);



app.get("/register", (req, res) => {
  Register.find()
    .then((register) => {
      res.send(register);
    })
    .catch((err) => {
      res.send({
        message: " error ",
      });
    });
});


app.post("/register", (req, res) => {
  console.log("posting data")
  const register = new Register({
    
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
  });
  console.log(register)
  register
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({
        message: "Unbale to add",
      });
    });
});

// route for checking if login valid or not
app.post('/checklogin',(req,res)=>
{
    let findQuery={}
    findQuery["Email"]=req.body.email
    findQuery["Password"]=req.body.password
    console.log(findQuery)
    User.findOne(findQuery).then(response=>
        {
            if(response===null)
            {
                console.log(response)

                res.send("NOTOK")
            }
            else
                res.send("OK")
        }
    )
})


app.listen(4000, () => {
  console.log("App Server Run");
});
















