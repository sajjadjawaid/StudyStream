const route = require("express").Router();

const {validateAndCreate, getAllCourses, deleteCourse, updateCourse} = require('../Controllers/coursesController');

route.post('/create', validateAndCreate);
route.get('/getAll', getAllCourses);
route.delete('/delete', deleteCourse);
route.put('/update', updateCourse);

module.exports = route;