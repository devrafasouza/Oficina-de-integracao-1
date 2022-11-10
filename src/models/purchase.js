'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Purchase extends Model {

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
        modelName: 'Purchase',
        updatedAt: false,
        freezeTableName: true,
        createdAt: false,
    });
    return Purchase;
};