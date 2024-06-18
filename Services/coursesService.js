
const coursesModel = require('../Models/coursesModel');

module.exports = {
    toCheck : () =>{
        try{
       const user = coursesModel.toCheck();
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