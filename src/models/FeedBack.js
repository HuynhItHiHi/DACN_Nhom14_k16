'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FeedBack extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      FeedBack.belongsTo(models.Employee)
    }
  }
  FeedBack.init({
    description: DataTypes.STRING,
    date: DataTypes.DATE, 
    employeeId:DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'FeedBack',
  });
  return FeedBack;
};