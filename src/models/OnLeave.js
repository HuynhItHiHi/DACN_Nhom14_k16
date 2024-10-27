'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OnLeave extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OnLeave.belongsTo(models.Employee)
      // define association here
    }
  }
  OnLeave.init({
    startDate: DataTypes.DATE, 
    endDate: DataTypes.DATE,
    employeeId:DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'OnLeave',
  });
  return OnLeave;
};