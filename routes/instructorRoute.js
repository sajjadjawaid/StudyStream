const route = require("express").Router();
const {validateAndCreate} = require('../Controllers/instructorsController');

route.post('/createInstructor', validateAndCreate );

module.exports = route;