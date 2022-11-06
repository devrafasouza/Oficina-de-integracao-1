'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class GamesGenres extends Model {

    }

    GamesGenres.init({
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
        modelName: 'GamesGenres',
    });
    return GamesGenres;
};