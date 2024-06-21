const route = require("express").Router();

const {validateAndCreate} = require('../Controllers/coursesController');

route.post('/create', validateAndCreate)

module.exports = route;