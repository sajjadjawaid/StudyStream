const instructors = require('./definitions/instructors')
const {models} = require('./index');

module.exports = {
    validateAndCreate: async (body) =>{
            try{
           const user = await models.instructors.create({...body});
           if(user.error){
            return {
                error: user.error
            }
           }
           return {
            response: user
           }

            }catch(error){
                return{
                    error: error
                }

            }
    },

    getAllInstructors: async () =>{
        try{
            const user = await models.instructors.findAll({
                attributes: {
                    exclude: ["deletedAt", "createdAt", "updatedAt"]
                },
                include: {
                    model: models.courses,
                    attributes: ["courseName", "courseCode", ]
                }
            })
            if(user.error){
             return {
                 error: user.error
             }
            }
            return {
             response: user
            }
 
             }catch(error){
                 return{
                     error: error
                 }
 
             }
    },
    deleteInstructor: async (instructorId) =>{
        try {
            const user = await models.instructors.destroy({
                where: {instructorID : instructorId}
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
    updateInstructor: async (instructorId, body) =>{
        try {
            
            const [NumberofaffectedRows, updateRows] = await models.instructors.update(body, {
                where: { instructorID: instructorId },
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