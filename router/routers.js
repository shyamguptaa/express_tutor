const express=require("express");
const router=express.Router();

router.get("/",(req,res)=>{
    res.send("Helllo").status(200);
})

router.post("/login",(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        res.send("enter the details").status(400);
    }
    if(email.length<5){
        res.send("EMail is invalid").status(401);
    }
    if(email.length > 5 && vaildpass(password)){
        res.send("email is valid").status(200)
    }
    vaildpass("shyam@gmail.com")
    res.send(req.body.name).status(200);
})


function vaildpass(password){
    const passregex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const vald=passregex.test(password)
    console.log(vald)
    return vald
}


module.exports=router