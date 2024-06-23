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
    updateCourse: async (courseId, body) =>{
        try {
            
            const [NumberofaffectedRows, updateRows] = await models.courses.update(body, {
                where: { courseID: courseId },
                returning: true // include this we want the whole rows which includes changed and unchanged
            });
            console.log("in model: ", updateRows) 
            if (NumberofaffectedRows === 0) {
                return {
                    error: "No rows updated"
                };
            }
            console.log("number of rows: ",NumberofaffectedRows );
            return {
                response: updateRows
            };
            

        } catch(error){
            return {
                error: error
            }
        }

    }
}