
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
    updateCourse: async (body) =>{
        try {
        
        const results = [];
        for (const course of body) {
            const { courseId, ...body } = course;
            const user = await coursesModel.updateCourse(courseId, body);
            if (user.error) {
                results.push({ courseId, error: user.error });
            } else {
                results.push({ courseId, response: user.response });
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