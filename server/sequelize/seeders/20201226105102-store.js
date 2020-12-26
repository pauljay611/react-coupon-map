"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Stores", [
      {
        name: "John",
        description: "louisa coffee",
        lat: 25.0335,
        lng: 121.564,
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Stores", null, {});
  },
};
