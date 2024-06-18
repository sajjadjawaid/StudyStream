const route = require("express").Router();

const {toCheck} = require('../Controllers/coursesController');

route.get('/toCheck', toCheck);

module.exports = route;