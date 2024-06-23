const {models} = require('./index');

module.exports = {
    validateAndCreate: async (body) =>{
        try{
       const user = await models.students.create({...body});
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
getAllStudents: async () =>{
    try{
        const user = await models.students.findAll({
            attributes: {
                exclude: ["deletedAt", "createdAt", "updatedAt"]
            },
           
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
deleteStudent: async (studentId) =>{
    try {
        const user = await models.students.destroy({
            where: {studentID : studentId}
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