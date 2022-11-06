'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Purchases extends Model {

    }
    Purchases.init({
        id_purchase: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        id_game: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        id_user: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Purchases',
    });
    return Purchases;
};