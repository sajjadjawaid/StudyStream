const {Model, DataTypes} = require("sequelize");
const sequelize = require('../../bin/dbConnection');
const courses = require('./courses');
const students = require('./students');

class enrollement extends Model {

}

enrollement.init({
    enrollementID: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    studentID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
        references: {
            model: students,
            key: "studentID"
        }

    },
    courseID: {
        type: DataTypes.INTEGER,
        allowNull: false,
       
        references: {
            model: courses,
            key: "courseID"
        }

    }

},
 {
    timestamps: true,
    paranoid: true,
    tableName: "enrollement",
    sequelize



})

module.exports = enrollement;