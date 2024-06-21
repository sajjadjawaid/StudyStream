
const coursesModel = require('../Models/coursesModel');

module.exports = {
    validateAndCreate : async (body) =>{
        try{
       const user = coursesModel.validateAndCreate(body);
       if(user.error){
        return {
            error: user.error
        }
       }
       return{
        response: user.response
       }
        } catch(error){
            return {
                error: error
            }

        }
    }
}