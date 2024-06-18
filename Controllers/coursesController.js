const coursesService = require('../Services/coursesService');

module.exports = {
    toCheck : (req, res) =>{
       try{
        const user = coursesService.toCheck();
        if(user.error){
            return res.send({
                error: user.error
            })
        }
        return res.send({
            response: user.response
        })
       } catch(error){
        return res.send({
            error: error
        })

       }
    

    }
}