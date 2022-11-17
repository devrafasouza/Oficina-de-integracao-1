'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class GameLanguageSupport extends Model {

    }

    GameLanguageSupport.init({
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
        modelName: 'GameLanguageSupport',
        updatedAt: false,
        freezeTableName: true,
        createdAt: false,
    });
    return GameLanguageSupport;
};
