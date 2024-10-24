'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('user', [
      {
       email: 'fake1@gmail1.com',
       password: '123456',
       firstName:'Trung Huynh1'
     },
     {
      email: 'fake2@gmail2.com',
      password: '123456',
      firstName:'Trung Huynh2'
    },
    {
      email: 'fake3@gmail3.com',
      password: '123456',
      firstName:'Trung Huynh3'
    }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
