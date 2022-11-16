'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Cart_item extends Model {
      static associate(models) {
        Cart_item.belongsTo(models.User), {
            foreignKey: 'id_user',
            constraint: true,
        };
        Cart_item.belongsTo(models.Game), {
          foreignKey: 'id_game',
          constraint: true,
      };
      }
    }

    Cart_item.init({
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
    }, {
        sequelize,
        modelName: 'Cart_item',
        updatedAt: false,
        freezeTableName: true,
        createdAt: false,
    });
    return Cart_item;
};