'use strict';

const uuid = require('uuid');
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Roles', [
       {
        id:uuid.v1(),
        createdAt:new Date().toISOString(),
        updatedAt:new Date().toISOString(),
        name:"user"
      },
      {
        id:uuid.v1(),
        createdAt:new Date().toISOString(),
        updatedAt:new Date().toISOString(),
        name:"superuser"
      },
      {
        id:uuid.v1(),
        createdAt:new Date().toISOString(),
        updatedAt:new Date().toISOString(),
        name:"admin"
      },
      {
        id:uuid.v1(),
        createdAt:new Date().toISOString(),
        updatedAt:new Date().toISOString(),
        name:"enduser"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
