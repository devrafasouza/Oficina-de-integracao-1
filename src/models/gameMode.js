'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class GamesMode extends Model {

    }

    GamesMode.init({
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
        modelName: 'GamesMode',
        updatedAt: false,
        freezeTableName: true,
        createdAt: false,
    });
    return GamesMode;
};