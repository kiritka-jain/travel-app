'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'RoleId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'roles', 
        key: 'id', 
      },
      onUpdate: 'CASCADE', 
      onDelete: 'CASCADE', 
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'RoleId');
  }
};
