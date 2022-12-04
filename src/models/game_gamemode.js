'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Game_gamemode extends Model {
      static associate(models) {
      }
    }

    Game_gamemode.init({
      id_game: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: 'Game'
      },
      id_gamemode: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: 'Gamemode'
      },
    }, {
        sequelize,
        modelName: 'Game_gamemode',
        updatedAt: false,
        freezeTableName: true,
        createdAt: false,
    });
    return Game_gamemode;
};