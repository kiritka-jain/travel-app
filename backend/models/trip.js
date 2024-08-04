'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Trip.hasOne(models.User);
    }
  }
  Trip.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id",
      }
    },
    destination: DataTypes.STRING,
    start_at: DataTypes.DATE,
    ends_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Trip',
  });
  return Trip;
};