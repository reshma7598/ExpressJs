// importing express

const express=require('express')
// initialize express
const app =express()
// port 
const port=5001

// middleware
app.use(express.json())




// http methods=get,post,delete,update

app.get('/',(req,res)=>{
   try{
    res.send("hello world");

   }
   catch(err){
    console.log(err);
   }
 
})

// post

app.post("/postdata",(req,res)=>{
    try{
const {username,place,number}=req.body;
const user={username:username,place:place,number:number}
res.send(user)
// console.log(user);
    }catch(err){
        console.log(err);
    }
})

// get
app.get('/getdata',(req,res)=>{
    try{
const user=req.body;
res.send(user);
console.log(user);
    }catch(err){
        console.log(err);
    }
})

// liten or running port

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})