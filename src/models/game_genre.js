'use strict';

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Game_genre extends Model {
      static associate(models) {
      }
    }
    Game_genre.init({  
      id_game: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: 'Game'
      },
      id_genre: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: 'Genre'
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
