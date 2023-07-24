const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    return sequelize.define("Suppliers", {
        id_Supplier: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            unique: true
        },
        mail: {
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.INTEGER
        },
        adress: {
            type: DataTypes.STRING
        }
    })
}