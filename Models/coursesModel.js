
module.exports = {
    toCheck : () =>{
        try{
            const user = new Date();
            if(user.error){
                return {
                    error: user.error
                }
            }
            return{
                response: user
            }
        }catch(error){
            return {
                error: error
            }

        }
    }
}