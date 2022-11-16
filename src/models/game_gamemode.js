'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Game_gamemode extends Model {
      static associate(models) {
        Game_gamemode.belongsTo(models.Game), {
            foreignKey: 'id_game',
            constraint: true,
        };
        Game_gamemode.belongsTo(models.Gamemode), {
          foreignKey: 'id_gamemode',
          constraint: true,
      };
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