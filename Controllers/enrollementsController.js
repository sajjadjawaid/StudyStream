const joi = require("joi");
const enrollementService = require('../Services/enrollementsService');

const createEnrollementSchema = joi.object().keys({
    courseID: joi.string().required(),
    studentID: joi.string().required()
   
})

module.exports = {
    validateAndCreate : async (req, res) =>{
        try{
         const validation = await createEnrollementSchema.validateAsync(req.body)
         const user = await enrollementService.validateAndCreate(validation);
         if(user.error){
             return res.send({
                 error: user.error
             })
         }
         return res.send({
             
                 message: "Enrollement is validated",
                 response: user.response
             
         })
        } catch(error){
         return res.send({
             error: error
         })
 
        }
     
 
     },
     getAllEnrollements: async (req, res) =>{
        try{
            
            const user = await enrollementService.getAllEnrollements();
            if(user.error){
                return res.send({
                    error: user.error
                })
            }
            return res.send({
                
                    message: "All Instructors: ",
                    response: user.response
                
            })
           } catch(error){
            return res.send({
                error: error
            })
    
           }
    },
    
}