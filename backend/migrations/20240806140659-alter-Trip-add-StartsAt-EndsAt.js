'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Trips', 'StartsAt', {
      type: Sequelize.DATEONLY
    });

    await queryInterface.addColumn('Trips', 'EndsAt', {
      type: Sequelize.DATEONLY
    });
  },
  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Trips', 'StartsAt');
    await queryInterface.removeColumn('Trips', 'EndsAt');
  }
};
