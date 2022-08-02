const express=require('express');
const router=express.Router();
const UserModel=require('../../models/User');
const upload=require('../../middleware/fileStorage');


router.get('/',(req,res)=>{
    res.send("welcome")
})

router.post('/',upload.single('profile'),async(req,res)=>{
    const userDetails={
        name:req.body.name,
        fname:req.body.fname,
        password:req.body.password,
        email:req.body.confirmPassword,
        profile:req.body.profile,
        phone:req.body.phone
    }
    const addUser=new UserModel(userDetails);
    const user=await addUser.save()
    if(user){
        res.status(200).json({msg:'Success',data:user});
    }
    else{
        res.status(200).json({msg:'failed'});
    }
})


module.exports=router;