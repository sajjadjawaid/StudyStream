const enrollementModel = require('../Models/enrollementsModel');


module.exports = {
    validateAndCreate: async (body) =>{
        try{
            
          
          const user = await enrollementModel.validateAndCreate(body)
          if(user.error){
            return {
                error: user.error
            }
           }
           return {
            response: user.response
           }


        }catch(error){
            return{
                error: error
            }

        }
},
getAllEnrollements: async () =>{
        
    try{
            
        const user = await enrollementModel.getAllEnrollements();
        console.log("in service: ", user);
        if(user.error){
          return {
              error: user.error
          }
         }
         return {
          response: user.response
         }


      }catch(error){
          return{
              error: error
          }

      }

},
}