'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Game_image extends Model {
      static associate(models) {
      }
    }

    Game_image.init({
        id_game: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: 'Game'
        },
        url: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        type: {
          type: DataTypes.STRING,
          allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Game_image',
        updatedAt: false,
        freezeTableName: true,
        createdAt: false,
    });
    return Game_image;
};