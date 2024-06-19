
const instructorService = require('../Services/instructorsService');
const joi = require("joi");

const createInstructorSchema = joi.object().keys({
    name : joi.string().required(),
    phone: joi.string().alphanum().required(),
    email: joi.string().email().required(),
   
})

module.exports = {
    validateAndCreate : async (req, res) =>{
       try{
        const validation = await createInstructorSchema.validateAsync(req.body);
        const user = await instructorService.validateAndCreate(validation);
        if(user.error){
            return res.send({
                error: user.error
            })
        }
        return res.send({
            
                message: "instructor is validated",
                response: user.response
            
        })
       } catch(error){
        return res.send({
            error: error
        })

       }
    

    }
}