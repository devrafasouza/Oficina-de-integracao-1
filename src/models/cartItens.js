'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class CartItens extends Model {

    }

    CartItens.init({
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
        modelName: 'CartItens',
    });
    return CartItens;
};