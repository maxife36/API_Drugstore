const { Sequelize } = require("sequelize");
const  {USER, PASSWORD, HOST, DATABASE} = require("dotenv").config().parsed

//{USER, PASSWORD, HOST, DATABASE}
const user_Factory = require("./_Users");
const SUppliers_Factory = require("./_Suppliers");
const prom_Products_Factory = require("./_Promotios_Products");
const promotions_Factory = require("./_Promotions");
const products_Factory = require("./_Products");
const category_Factory = require("./_Category");
const cart_Factory = require("./_Cart");
const cart_Products_Factory = require("./_Cart_Products");

//-------Acces Parameters-------
let user_DB = USER;
let password_DB = PASSWORD;
let host_DB = HOST;
let dataBase_DB = DATABASE;

//-------sequelize instance creation-------

const sequelize = new Sequelize(
  `postgres://${user_DB}:${password_DB}@${host_DB}/${dataBase_DB}`,
  { logging: false }
);

//-------model creation-------

const user = user_Factory(sequelize);
const suppliers = SUppliers_Factory(sequelize);
const promotion = promotions_Factory(sequelize);
const product = products_Factory(sequelize);
const category = category_Factory(sequelize);
const cart = cart_Factory(sequelize);
const prom_Product = prom_Products_Factory(sequelize);
const cart_Product = cart_Products_Factory(sequelize);

//-------model links-------

user.hasMany(cart);
cart.belongsTo(user);

cart.belongsToMany(product, { through: cart_Product });
product.belongsToMany(cart, { through: cart_Product });

promotion.belongsToMany(cart_Product, { through: "Prom - Cart_Product" });
cart_Product.belongsToMany(promotion, { through: "Prom - Cart_Product" });

promotion.belongsToMany(product, { through: prom_Product });
product.belongsToMany(promotion, { through: prom_Product });

product.belongsToMany(suppliers, { through: "Product - Suppliers" });
suppliers.belongsToMany(product, { through: "Product - Suppliers" });

category.hasMany(product);
product.belongsTo(category);

module.exports = {
  sequelize,
  user,
  suppliers,
  promotion,
  product,
  category,
  cart,
  prom_Product,
  cart_Product,
};
