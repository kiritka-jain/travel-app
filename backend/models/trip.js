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
      Trip.belongsTo(models.User);
    }
  }
  Trip.init({
    UserId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { 
        model: 'User',
        key: 'id',
      },
      field: 'UserId', 
    },
    destination: DataTypes.STRING,
    StartsAt: DataTypes.DATE,
    EndsAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Trip',
  });
  return Trip;
};