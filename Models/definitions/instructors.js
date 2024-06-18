const {Model, DataTypes} =  require("sequelize");
const sequelize = require('../../bin/dbConnection');


class instructors extends Model {

}

instructors.init({
    instructorID : {
        primaryKey: true,
        type: DataTypes.STRING(255)
    },

    name: {
        allowNull: false,
        type: DataTypes.STRING(255)
    },

    phone: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(255)

    },
    email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(255)
    }
},{
    timestamps: true,
    paranoid: true,
    tableName: "instructors",
    sequelize

})

module.exports = instructors;