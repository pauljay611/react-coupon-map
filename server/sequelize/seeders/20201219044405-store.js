"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Store", [
      {
        name: "John",
        description: "louisa coffee",
        lat: 25.0335,
        lng: 121.564,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Store", null, {});
  },
};
