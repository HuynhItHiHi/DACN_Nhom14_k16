'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Salary', {
      salaryId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      thangNam: {
        type: Sequelize.DATE
      },
      luongCung: {
        type: Sequelize.DECIMAL
      },
      luongThuong: {
        type: Sequelize.DECIMAL
      },
      luongUngTruoc: {
        type: Sequelize.DECIMAL
      },
      phuCap: {
        type: Sequelize.DECIMAL
      },
      employeeId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Salary');
  }
};