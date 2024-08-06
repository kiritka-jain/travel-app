'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role);
    }
  }
  User.init({
    name: DataTypes.STRING,
    loginId: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      references: { 
        model: 'Role',
        key: 'id',
      },
      field: 'login_id', 
    },
    password: DataTypes.STRING,
    roleId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { 
        model: 'Role',
        key: 'id',
      },
      field: 'RoleId', 
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  });
  return User;
};