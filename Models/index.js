const sequelize = require('../bin/dbConnection');
const courses = require('./definitions/courses');
const students = require('./definitions/students');
const instructors = require('./definitions/instructors');
const enrollement = require('./definitions/enrollement');

const models = {courses, students, instructors, enrollement};

//relations
instructors.hasMany(courses, {foreignKey: "instructorID"});
courses.belongsTo(instructors, {foreignKey: "instructorID"});

courses.hasMany(enrollement, { foreignKey: "courseID"});
enrollement.belongsTo(courses, {foreignKey: "courseID"});
students.hasMany(enrollement,{foreignKey: "studentID"});
students.belongsTo(enrollement, { foreignKey: "studentID"});


const db = {};

db.sequelize =  sequelize;
sequelize.models = models;

module.exports = {db, models};