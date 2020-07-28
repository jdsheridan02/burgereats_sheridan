// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

var burger = {
  selectAll: function (burgerCallback) {
    orm.all("burger", function (res) {
      burgerCallback(res);
    });
  },

  insertOne: function (cols, vals, burgerCallback) {
    orm.create("burger", cols, vals, function (res) {
      burgerCallback(res);
    });
  },

  updateOne: function (objColVals, condition, burgerCallback) {
    orm.update("burger", objColVals, condition, function (res) {
      burgerCallback(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js)
module.exports = burger;