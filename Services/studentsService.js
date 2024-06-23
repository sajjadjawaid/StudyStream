const studentModel = require('../Models/studentsModel');


module.exports = {
    validateAndCreate: async (body) =>{
        try{
            
          
          const user = await studentModel.validateAndCreate(body);
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
getAllStudents: async () =>{
        
    try{
            
        const user = await studentModel.getAllStudents();
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
deletestudent: async (studentId) =>{
    try {
       const user = await studentModel.deleteStudent(studentId);
       if(user.error || !user.response){
        return{
            error: {
              message:  "unable to delete",
              error: user?.error || user.response,
            
        }}
       }
       return {
       response:{
        message: "student is deleted.",
        response: user.response
       }
       }
        
        

    } catch(error){
        return {
            error: error
        }
    }

},
}