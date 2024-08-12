'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Session extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Session.belongsTo(models.User);
    }
  }
  Session.init({
    Token: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
  },
  UserId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { 
      model: 'User',
      key: 'id',
    },
    field: 'UserId', 
  },
  ExpiresAt: DataTypes.TIME, 
},{
    sequelize,
    modelName: 'Session',
  });
  return Session;
};