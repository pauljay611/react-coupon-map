"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Categories", [
      {
        name: "drinks",
        description: "all drinks include softdrink and alcohol",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "foods",
        description: "something you can eat",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "groceries",
        description: "something you can use",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
