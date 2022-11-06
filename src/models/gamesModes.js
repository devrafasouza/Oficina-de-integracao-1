'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class GamesModes extends Model {

    }

    GamesModes.init({
      id_gamemode: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
        sequelize,
        modelName: 'GamesModes',
    });
    return GamesModes;
};