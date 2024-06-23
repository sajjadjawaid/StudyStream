const route = require("express").Router();
const {validateAndCreate, getAllEnrollements} = require('../Controllers/enrollementsController');

route.post('/create', validateAndCreate);
route.get('/getAll', getAllEnrollements);

module.exports =  route;