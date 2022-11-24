'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class GameGameMode extends Model {

    }

    GameGameMode.init({
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
        modelName: 'GameGameMode',
        updatedAt: false,
        freezeTableName: true,
        createdAt: false,
    });
    return GameGameMode;
};
