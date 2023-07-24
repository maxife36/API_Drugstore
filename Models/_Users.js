const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    return sequelize.define("User",{
        id_User: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    })
}