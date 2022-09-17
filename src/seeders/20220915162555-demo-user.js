'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // email: DataTypes.STRING,
    // firstName: DataTypes.STRING,
    // password: DataTypes.STRING,
    // lastName: DataTypes.STRING,
    // address: DataTypes.STRING,
    // gender: DataTypes.BOOLEAN,
    // roleid: DataTypes.STRING,
    return queryInterface.bulkInsert('Users', [{
      email: "huyhoangle789990@gmail.com",
      firstName: "hoang",
      password: "123456",
      lastName:"lee" ,
      address:"Nam dinh" ,
      gender: 1 ,
      typeRole:'ROLE',
      keyRole:'R1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
