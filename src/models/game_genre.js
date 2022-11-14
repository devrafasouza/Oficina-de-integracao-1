'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Game_genre extends Model {
      static associate(models) {
        Game_genre.belongsTo(models.Game), {
            foreignKey: 'id_game'
        };
        Game_genre.belongsTo(models.Genre), {
          foreignKey: 'id_genre'
      };
      }
    }

    Game_genre.init({
      id_game: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_genre: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }, {
        sequelize,
        modelName: 'Game_genre',
        updatedAt: false,
        freezeTableName: true,
        createdAt: false,
    });
    return Game_genre;
};