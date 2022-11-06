'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class GameGamesModes extends Model {

    }

    GameGamesModes.init({
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
        modelName: 'GameGamesModes',
    });
    return GameGamesModes;
};