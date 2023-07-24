const {DataTypes} = require("sequelize")

module.exports = (seq) => {
    return seq.define("Category", {
        id_Category: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });
}