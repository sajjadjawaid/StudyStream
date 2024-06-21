
const coursesService = require('../Services/coursesService');
const joi = require("joi");

const createCoursesSchema = joi.object().keys({
    courseName : joi.string().required(),
    courseCode: joi.string().pattern(/^[a-zA-Z0-9\-]+$/).required(),
    description: joi.string().required(),
    credit: joi.string().required(),
    instructorID: joi.string().required()


})

module.exports = {
    validateAndCreate : async (req, res) =>{
       try{
        const validation = await createCoursesSchema.validateAsync(req.body);
        const user = await coursesService.validateAndCreate(validation);
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
    

    }
}