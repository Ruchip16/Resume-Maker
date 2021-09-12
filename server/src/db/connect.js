const mongoose=require("mongoose");
 
mongoose.connect("mongodb+srv://Aarushi:Archit@256@cluster0.pjb8r.mongodb.net/DIY?retryWrites=true&w=majority",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
})
.then(()=>{
    console.log("Connection successfull")
})
.catch(err=>{
    console.log("Connection to db not successfull due to",err);
})