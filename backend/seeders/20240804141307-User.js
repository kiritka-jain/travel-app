'use strict';

/** @type {import('sequelize-cli').Migration} */
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
   await queryInterface.bulkInsert('User',[
    {
    roles_id: 1,
    firstName: "Harry",
    lastName: "Potter",
    login_id: "harry@test.com",
    password: "potter",
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    roles_id: 2,
    firstName: "Iron",
    lastName: "Man",
    login_id: "Iron@test.com",
    password: "man",
    createdAt: new Date(),
    updatedAt: new Date()
   },
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("User", null, {});
  }
};