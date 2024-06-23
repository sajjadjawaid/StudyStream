const route = require("express").Router();
const {validateAndCreate, getAllStudents, deleteStudent} = require('../Controllers/studentsController');

route.post('/create', validateAndCreate);
route.get('/getAll', getAllStudents);
route.delete('/delete', deleteStudent);

module.exports = route;