'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class GamesLanguagesSupport extends Model {

    }

    GamesLanguagesSupport.init({
        id_game: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        id_language: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        interface: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
        },
        audio: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        subtitle: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'GamesLanguagesSupport',
    });
    return GamesLanguagesSupport;
};