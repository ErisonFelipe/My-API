'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Pets.hasOne(Usuarios);
      // Usuarios.belongsTo(Pets);
    }
  };
  Pets.init({
    nome: DataTypes.STRING,
    especie: DataTypes.STRING,
    tempo: DataTypes.DATE,
    local: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pets',
  });
  return Pets;
};