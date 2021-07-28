'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pets', [{
      nome: 'John',
      especie: 'cão',
      tempo: null,
      local: 'São Paulo',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pets', null, {});
  }
};
