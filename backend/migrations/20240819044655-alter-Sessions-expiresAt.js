'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.removeColumn('Sessions', 'expiresAt');
    await queryInterface.addColumn('Sessions', 'expiresAt',{
      type: Sequelize.DATE,
      allowNull: false

    });


  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Sessions', 'expiresAt');
    await queryInterface.addColumn('Sessions', 'expiresAt',{
      type: Sequelize.TIME,
      allowNull: false

    });

  }
  
};
