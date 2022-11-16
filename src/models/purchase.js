'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Purchase extends Model {
      static associate(models) {
        Purchase.belongsTo(models.User), {
            constraint: true,
            foreignKey: 'id_user'
        };
        Purchase.belongsTo(models.Game), {
          constraint: true,
          foreignKey: 'id_game'
      };
      }
    }
    Purchase.init({
        id_purchase: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        id_game: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: 'Game'
        },
        id_user: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: 'User'
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Purchase',
        updatedAt: false,
        freezeTableName: true,
        createdAt: false,
    });
    return Purchase;
};