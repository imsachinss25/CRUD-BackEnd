const StudentSchema = require("../models/students");

exports.createStudent = (req,res,next)=>{

   console.log(req.body);
   const user = new Student(req.body);
   user.save().then(()=>{
       res.status(201).send(user);
   }).catch((e)=>{
       console.log(e);
       res.status(400).send(e);
  
   })

});


exports.getStudent = async (req, res,next)=>{
    try{
        const studentData = await Student.find();
        res.send(studentData);
    }
    catch(e){
        res.send(e);
    }
})

exports.updateStudent = async (req, res)=>{
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

exports.deleteStudent = async (req, res)=>{
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

