'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class CartItem extends Model {
      static associate(models) {
        CartItem.belongsTo(models.User), {
            foreignKey: 'id_user'
        };
      }
    }

    CartItem.init({
      id_game: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_genre: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }, {
        sequelize,
        modelName: 'CartItem',
        updatedAt: false,
        freezeTableName: true,
        createdAt: false,
    });
    return CartItem;
};
