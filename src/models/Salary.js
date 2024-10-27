'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Salary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Salary.belongsTo(models.Employee)
    }
  }
  Salary.init({
    thangNam:DataTypes.DATE,
    luongCung:DataTypes.DECIMAL,
    luongThuong:DataTypes.DECIMAL,
    luongUngTruoc:DataTypes.DECIMAL,
    phuCap:DataTypes.DECIMAL,
    employeeId:DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'Salary',
  });
  return Salary;
};