const {Model, DataTypes} = require("sequelize");
const sequelize = require('../../bin/dbConnection');

class students extends Model {

}

students.init({
    studentID: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
        },
    name: {
        allowNull: false,
        type: DataTypes.STRING(255)

    },
    phone: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(255)
    } ,
    email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(255)
    },
    
},{
    timestamps: true,
    paranoid: true,
    tableName: "students",
    sequelize



})



module.exports = students;