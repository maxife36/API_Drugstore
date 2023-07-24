const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define("Products", {
        id_Product: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
        },
        sales_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER
        },
        unit_Of_Measure: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}