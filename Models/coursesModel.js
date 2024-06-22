const {models} = require('./index')
module.exports = {
    validateAndCreate : async (body) =>{
        try{
            const user = await models.courses.create({...body});
            if(user.error){
                return {
                    error: user.error
                }
            }
            return{
                response: user
            }
        }catch(error){
            return {
                error: error
            }

        }
    },
    getAllCourses : async (body) =>{
        try{
            const user = await models.courses.findAll({
                attributes: {
                    exclude: ["deletedAt", "createdAt", "updatedAt"]
                },
                include: {
                    model: models.instructors,
                    attributes: ["name", "email"]
                }
            })
            if(user.error){
                return {
                    error: user.error
                }
            }
            return{
                response: user
            }
        }catch(error){
            return {
                error: error
            }

        }
    },
    deleteCourse: async (courseId) =>{
        try {
            const user = await models.courses.destroy({
                where: {courseID : courseId}
            })
            return{
                response: user
            }
            

        } catch(error){
            return {
                error: error
            }
        }

    },
}