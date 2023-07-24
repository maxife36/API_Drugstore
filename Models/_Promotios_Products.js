const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define("Promotions_Products", {
        id_Product: {
            type: DataTypes.UUID,
            references: {
                model: "Products",
                key: "id_Product"
            }
        },
        id_Promotion: {
            type: DataTypes.UUID,
            references: {
                model: "Promotions",
                key: "id_Promotion"
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
}