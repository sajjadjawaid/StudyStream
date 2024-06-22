const route = require("express").Router();
const {validateAndCreate, getAllInstructor, deleteInstructor, updateInstructor} = require('../Controllers/instructorsController');

route.post('/createInstructor', validateAndCreate );
route.get('/getAll', getAllInstructor);
route.delete('/delete', deleteInstructor); //destroy returns the number of rows affected
route.put('/update', updateInstructor); // update returns an array which contains number of affected rows and affected rows

module.exports = route;