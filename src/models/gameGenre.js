'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class GameGenre extends Model {

    }

    GameGenre.init({
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
        modelName: 'GameGenre',
        updatedAt: false,
        freezeTableName: true,
        createdAt: false,
    });
    return GameGenre;
};