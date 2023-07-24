const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define("Carts_Products", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        id_Product: {
            type: DataTypes.UUID,
            references: {
                model: "Products",
                key: "id_Product"
            }
        },
        id_Cart: {
            type: DataTypes.UUID,
            references: {
                model: "Carts",
                key: "id_Cart"
            }
        },
        id_Promotion: {
            type: DataTypes.UUID,
            references: {
                model: "Promotions",
                key: "id_Promotion"
            }
        },
        unit_price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        unit_Of_Measure: {
            type: DataTypes.STRING,
            allowNull: false
        },
        subtotal: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
}