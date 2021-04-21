const router = require("express").Router();
router.post("/students",(req,res,next)=>{

   console.log(req.body);
   const user = new Student(req.body);
   user.save().then(()=>{
       res.status(201).send(user);
   }).catch((e)=>{
       console.log(e);
       res.status(400).send(e);
  
   })

});

router.get("/students", async (req, res,next)=>{
    try{
        const studentData = await Student.find();
        res.send(studentData);
    }
    catch(e){
        res.send(e);
    }
})

router.patch("/students/:id", async (req, res)=>{
    try{
        const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id, req.body,{
            new : true
        });
        res.send(updateStudents);
    }catch(e){
        res.status(400).send(e);
    }
})

router.delete("/students/:id", async (req, res)=>{
    try{
        const _id = req.params.id;
        const deleteStudents = await Student.findByIdAndDelete(_id);
        if(!req.params.id)
        {
            return res.status(400).send();
        }
        res.send(deleteStudents);
    }catch(e){
        res.status(500).send(e);
    }
})
module.exports=router;
