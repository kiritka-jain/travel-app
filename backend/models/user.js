'use strict';
const {
  Model
} = require('sequelize');
const roles = require('./roles');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Roles);
      User.hasMany(models.Trips);
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },roles_Id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Roles",
        key: "id",
      },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    login_id: DataTypes.STRING,
    password: DataTypes.STRING
  }, 
    sequelize,
    modelName: 'User',
  }
  );
  return User;
};