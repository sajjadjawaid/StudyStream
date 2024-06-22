
const coursesModel = require('../Models/coursesModel');

module.exports = {
    validateAndCreate : async (body) =>{
        try{
       const user = await coursesModel.validateAndCreate(body);
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
    },
    getAllCourses : async () =>{
        try{
       const user = await coursesModel.getAllCourses();
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
    },
    deleteCourse: async (courseId) =>{
        try {
           const user = await coursesModel.deleteCourse(courseId);
           if(user.error || !user.response){
            return{
                error: {
                  message:  "unable to delete",
                  error: user?.error || user.response,
                
            }}
           }
           return {
           response:{
            message: "course is deleted.",
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