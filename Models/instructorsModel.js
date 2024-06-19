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
    } 
}