const instructorsModel = require('../Models/instructorsModel');

module.exports = {
    validateAndCreate: async (body) =>{
            try{
                
              
              const user = await instructorsModel.validateAndCreate(body);
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

    getAllInstructor: async () =>{
        
        try{
                
            const user = await instructorsModel.getAllInstructors();
            
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

    }
}