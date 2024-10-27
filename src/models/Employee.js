'use strict';
const bcrypt = require('bcrypt');
const salt=bcrypt.genSaltSync(10)
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employee.hasMany(models.Salary)
      Employee.hasMany(models.OnLeave)
      Employee.belongsTo(models.Group )
      Employee.hasMany(models.FeedBack)
      Employee.belongsToMany(models.Project,{through:'Project_Employee'})
    }
  }

  Employee.init({
    fullName: DataTypes.STRING, 
    addreess: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    CCCD: DataTypes.STRING,
    email: DataTypes.STRING,
    password:{
      type:DataTypes.STRING,
      set(value){
        const hashedPassword=bcrypt.hashSync(value,salt)
        this.setDataValue('password',hashedPassword)
      }
    },   
    birthDay: DataTypes.DATE,
    startWork: DataTypes.DATE,
    sex:DataTypes.STRING,
    groupId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Employee',
  });
  Employee.removeAttribute("ID")
  return Employee;
};