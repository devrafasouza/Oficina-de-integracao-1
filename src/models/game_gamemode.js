'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Game_gamemode extends Model {
      static associate(models) {
        Game_gamemode.belongsTo(models.Game), {
            foreignKey: 'id_game'
        };
        Game_gamemode.belongsTo(models.Gamemode), {
          foreignKey: 'id_gamemode'
      };
      }
    }

    Game_gamemode.init({
      id_game: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_gamemode: {
        type: DataTypes.INTEGER,
        allowNull: false,
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