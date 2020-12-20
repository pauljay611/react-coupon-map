"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Coupon", [
      {
        name: "louisa coffee 50% off",
        description: "louisa coffee 50% off",
        type: "Discount",
        dueTimestamp: new Date(),
        image: "https://cdn.webapp/image",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Coupon", null, {});
  },
};
