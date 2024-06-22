
const instructorService = require('../Services/instructorsService');
const joi = require("joi");

const createInstructorSchema = joi.object().keys({
    name : joi.string().required(),
    phone: joi.string().alphanum().min(9).max(9).required(),
    email: joi.string().email().required(),
   
})

const deleteUserSchema = joi.object().keys({
    instructorId: joi.string().required()
})

const updateInstructorSchema = joi.array().items(
    joi.object().keys({
        instructorId: joi.string().required(),
        name : joi.string().optional(),
        phone: joi.string().alphanum().min(9).max(9).optional(),
        email: joi.string().email().optional(),
    })
) 


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
    

    },

    getAllInstructor: async (req, res) =>{
        try{
            
            const user = await instructorService.getAllInstructor();
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
    deleteInstructor: async (req, res) =>{ 
        try { 
            const validate = await deleteUserSchema.validateAsync(req.query);
            const user = await instructorService.deleteInstructor(validate.instructorId);
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
    updateInstructor: async (req, res) =>{ 
        try { 
            const validate = await updateInstructorSchema.validateAsync(req.body);
            const user = await instructorService.updateInstructor(validate);
            
            console.log("in controller ", user)
            return res.send({
                response: user
            })

        } catch(error){
            return res.send({
                error: error
            })
        }

    },

}