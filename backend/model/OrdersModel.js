const { model } = require("mongoose");    // import the 'model' function from Mongoose

const { OrdersSchema } = require ("../schemas/OrdersSchema");     // import the OrdersSchema that defines the structure of an order

const OrdersModel = new model("order", OrdersSchema);   // Create an "order" model using the OrdersSchema

module.exports = { OrdersModel };   // export OrdersModel so it can be used in other files