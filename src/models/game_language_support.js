'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Game_language_support extends Model {
      static associate(models) {
        Game_language_support.belongsTo(models.Game), {
            foreignKey: 'id_game',
            constraint: true,
        };
        Game_language_support.belongsTo(models.Language), {
          foreignKey: 'id_language',
          constraint: true,
      };
      }
    }

    Game_language_support.init({
        id_game: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: 'Game'
        },
        id_language: {
            type: DataTypes.STRING,
            allowNull: false,
            references: 'Language'
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
        modelName: 'Game_language_support',
        updatedAt: false,
        freezeTableName: true,
        createdAt: false,
    });
    return Game_language_support;
};