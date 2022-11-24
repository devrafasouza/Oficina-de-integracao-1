'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Game_platform extends Model {
      static associate(models) {
        Game_platform.belongsTo(models.Game), {
          foreignKey: 'id_game',
          constraint: true,
        };
        Game_platform.belongsTo(models.Platform), {
          foreignKey: 'id_plataform',
          constraint: true,
        };
      }
    }
    Game_platform.init({
        id_game: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: 'Game'
        },
        id_plataform: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: 'Platform'
        },
        onSale: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Game_platform',
        updatedAt: false,
        freezeTableName: true,
        createdAt: false,
    });
    return Game_platform;
};