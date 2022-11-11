'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class GamePlataform extends Model {

    }

    GamePlataform.init({
        id_game: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        id_plataform: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        onSale: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'GamePlataform',
        updatedAt: false,
        freezeTableName: true,
        createdAt: false,
    });
    return GamePlataform;
};