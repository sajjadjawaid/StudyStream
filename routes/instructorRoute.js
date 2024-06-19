const route = require("express").Router();
const {validateAndCreate, getAllInstructor} = require('../Controllers/instructorsController');

route.post('/createInstructor', validateAndCreate );
route.get('/getAll', getAllInstructor);

module.exports = route;