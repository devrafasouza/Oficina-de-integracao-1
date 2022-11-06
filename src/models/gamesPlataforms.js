'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class GamesPlataforms extends Model {

    }

    GamesPlataforms.init({
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
        modelName: 'GamesPlataforms',
    });
    return GamesPlataforms;
};