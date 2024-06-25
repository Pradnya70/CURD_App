const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");



// router.get("/",(req,res)=>{
//     console.log("connect");
// });

// register user

router.post("/register",async(req,res)=>{
    // console.log(req.body);
    const {name,email,age,mobile,work,add,desc} = req.body;

    if(!name || !email || !age || !mobile || !work || !add || !desc){
       return res.status(422).json("plz fill the data");
    }

    try {
        
        const preuser = await users.findOne({email:email});
        console.log(preuser);

        if(preuser){
            return res.status(404).json("this is user is already present");
        }else{
            const adduser = new users({
                name,email,age,mobile,work,add,desc
            });

            await adduser.save();
            return res.status(201).json(adduser);
            console.log(adduser);
        }

    } catch (error) {
        return res.status(404).json(error);
    }
})


module.exports = router;