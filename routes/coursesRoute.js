const route = require("express").Router();

const {validateAndCreate, getAllCourses, deleteCourse} = require('../Controllers/coursesController');

route.post('/create', validateAndCreate);
route.get('/getAll', getAllCourses);
route.delete('/delete', deleteCourse);

module.exports = route;