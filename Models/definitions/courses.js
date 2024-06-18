const {Model, DataTypes} = require("sequelize");
const sequelize = require('../../bin/dbConnection');
const instructors = require('./instructors');

class courses extends Model {

}

courses.init({
    courseID: {
        primaryKey: true,
        type: DataTypes.STRING(255)
    },
    courseName: {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING(255)
        
    },
    Description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    Instructor: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    Credit: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 3
    },
    instructorID:{
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false,
        references: {
            model: instructors,
            key: "instructorID"
        }
    }

    }, {
        timestamps: true,
        paranoid: true,
        tableName: "courses",
        sequelize

    



})

module.exports = courses;