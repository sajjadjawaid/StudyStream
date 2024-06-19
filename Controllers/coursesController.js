
const coursesService = require('../Services/coursesService');
const joi = require("joi");

const createCoursesSchema = joi.object().keys({
    courseName : joi.string().alphanum().required(),
    courseCode: joi.string().alphanum().required(),
    desciption: joi.string().required(),
    credit: joi.string().required(),


})

module.exports = {
    toCheck : async (req, res) =>{
       try{
        const validation = await createCoursesSchema.validateAsync(req.body);
        return res.send({
            response: validation
        })
       } catch(error){
        return res.send({
            error: error
        })

       }
    

    }
}