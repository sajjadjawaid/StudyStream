
const coursesService = require('../Services/coursesService');
const joi = require("joi");

const createCoursesSchema = joi.object().keys({
    courseName : joi.string().required(),
    courseCode: joi.string().pattern(/^[a-zA-Z0-9\-]+$/).required(),
    description: joi.string().required(),
    credit: joi.string().required(),
    instructorID: joi.string().required()


})

const deleteCourseSchema = joi.object().keys({
    courseId: joi.string().required()
})

const updateCourseSchema = joi.array().items(
    joi.object().keys({
        courseId: joi.string().required(),
        courseCode : joi.string().optional(),
        courseName: joi.string().alphanum().min(9).max(9).optional(),
        description: joi.string().optional(),
        credit: joi.string().optional(),
        instructorId: joi.string().optional()
    })
) 

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
    

    },
    getAllCourses: async (req, res) =>{
        try{
            const user = await coursesService.getAllCourses();
            if(user.error){
                return res.send({
                    error: user.error
                })
            }
            return res.send({
                response: {
                    message: "All Courses: ",
                    response: user.response
                }
            })

        }catch(error){
            return res.send({
                error: error
            })
        }
    },
    deleteCourse: async (req, res) =>{
        try{
            const validate = await deleteCourseSchema.validateAsync(req.query)
            const user = await coursesService.deleteCourse(validate.courseId);
            if(user.error){
                return res.send({
                    error: user.error
                })
            }
            return res.send({
                response: {
                    
                    response: user.response
                }
            })

        }catch(error){
            return res.send({
                error: error
            })
        }
    },
    updateCourse: async (req, res) =>{ 
        try { 
            const validate = await updateCourseSchema.validateAsync(req.body);
            const user = await coursesService.updateCourse(validate);
            
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