const {models} = require('./index');

module.exports = {
    validateAndCreate: async (body) =>{
        try{
            
       const user = await models.enrollement.create({...body});
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
getAllEnrollements: async () =>{
    try{
        console.log("in model: ", models);
        const user = await models.enrollement.findAll({
            attributes: {
                exclude: ["deletedAt", "createdAt", "updatedAt"]
            },
            include: 
            
                
                {
                    model: models.students,
                    attributes: ["name"]
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


}