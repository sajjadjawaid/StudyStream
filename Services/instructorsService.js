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

    },
    deleteInstructor: async (instructorId) =>{
        try {
           const user = await instructorsModel.deleteInstructor(instructorId);
           if(user.error || !user.response){
            return{
                error: {
                  message:  "unable to delete",
                  error: user?.error || user.response,
                
            }}
           }
           return {
           response:{
            message: "instructor is deleted.",
            response: user.response
           }
           }
            
            

        } catch(error){
            return {
                error: error
            }
        }

    },
    updateInstructor: async (body) =>{
        try {
        //    const user = await instructorsModel.updateInstructor({...body});
        //    if(user.error || !user.response){
        //     return{
        //         error: {
        //           message:  "unable to update",
        //           error: user?.error || user.response,
                
        //     }}
        //    }
        //    return {
        //    response:{
        //     message: "instructor is updated.",
        //     response: user.response
        //    }
        //    }

        const results = [];
        for (const instructor of body) {
            const { instructorId, ...body } = instructor;
            const user = await instructorsModel.updateInstructor(instructorId, body);
            if (user.error) {
                results.push({ instructorId, error: user.error });
            } else {
                results.push({ instructorId, response: user.response });
            }
        }
        console.log("in service: ", results);
        return results;
            
            

        } catch(error){
            return {
                error: error
            }
        }

    },
}