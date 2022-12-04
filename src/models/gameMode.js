'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Gamemode extends Model {
      static associate(models) {
      }
    }

    Gamemode.init({
      id_gamemode: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
        sequelize,
        modelName: 'Gamemode',
        updatedAt: false,
        freezeTableName: true,
        createdAt: false,
    });
    return Gamemode;
};