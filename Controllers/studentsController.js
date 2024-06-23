const joi = require("joi");
const studentService = require('../Services/studentsService');

const createStudentSchema = joi.object().keys({
    
    name : joi.string().required(),
    phone: joi.string().alphanum().min(9).max(9).required(),
    email: joi.string().email().required(),
   
   
})

const deleteStudentSchema = joi.object().keys({
    studentId: joi.string().required()
})

module.exports = {
    
        validateAndCreate : async (req, res) =>{
            try{
             const validation = await createStudentSchema.validateAsync(req.body)
             const user = await studentService.validateAndCreate(validation);
             if(user.error){
                 return res.send({
                     error: user.error
                 })
             }
             return res.send({
                 
                     message: "student is validated",
                     response: user.response
                 
             })
            } catch(error){
             return res.send({
                 error: error
             })
     
            }
         
     
         },
         getAllStudents: async (req, res) =>{
            try{
                
                const user = await studentService.getAllStudents();
                if(user.error){
                    return res.send({
                        error: user.error
                    })
                }
                return res.send({
                    
                        message: "All Students: ",
                        response: user.response
                    
                })
               } catch(error){
                return res.send({
                    error: error
                })
        
               }
        },
        deleteStudent: async (req, res) =>{ 
            try { 
                const validate = await deleteStudentSchema.validateAsync(req.query);
                const user = await studentService.deletestudent(validate.studentId);
                if(user.error){
                    return res.send({
                        error: user.error
                    })
                }
                return res.send({
                    response: user.response
                })
    
            } catch(error){
                return res.send({
                    error: error
                })
            }
    
        },
     
    }
