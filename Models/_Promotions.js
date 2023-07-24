const {DataTypes} = require ("sequelize");

module.exports = (sequelize) => {
    return sequelize.define("Promotions", {
        id_Promotion: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        prom_Price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })
}