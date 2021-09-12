const express=require("express");
const app=express();
const User=require('./models/Users');
const PORT=process.env.PORT||3001;
require("./db/connect");
const bcrypt=require("bcryptjs");



app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.send("Hello world");
});

app.post("/register",async (req,res)=>{
    try{
        console.log(req.body.name);
        const userData=new User({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            password:req.body.password
        })
        console.log(req.body.email)
        const loginData=await User.findOne({email:req.body.email});
        if(loginData)
        {
            return res.json({message:"Email already registered"})
        }
        //password hashing->register.js
        //token
        
        //const token=await userData.generateAuthToken();
        // console.log(token);

        const result=await userData.save();
        res.status(201).json({message:"Signedup successfully"})
        
    }catch(err){
        res.status(400).json({message:"error"});
        console.log(err)
    }
})


//login check
app.post("/login",async (req,res)=>{
    try{
        const email=req.body.email;
        const password=req.body.password;

        console.log(`${email} and ${password}`);
        const loginData=await User.findOne({email:req.body.email});

        const isMatch=await bcrypt.compare(password,loginData.password);
        
        //token
        console.log(loginData)
        const token=await loginData.generateAuthToken();
        // console.log(token);

        res.cookie("jwt",token,{
            // expires:new Date(Date.now() + 50000),
            httpOnly:true,
        });

        if(isMatch)
        {
            res.status(201).json({message:"Logged in successfully"});
        }else if(!isMatch)
        {
            res.json({message:"Oops! Incorrect credentials"})
        }
        else{
            res.json({message:"This account is not registered"});
        }
    }
    catch(err)
    {
        res.status(400).json({message:"Error logging in"});
    }
})


app.get('/logout',(req,res)=>{
    console.log("Logged out");
    res.clearCookie("jwt",{path:'/'});
    res.status(200).send("User logged out");
})


app.listen(PORT,()=>{
    console.log(`Server running at Port ${PORT}`);
})