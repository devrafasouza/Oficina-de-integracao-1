'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Platform extends Model {
        static associate(models) {
          }
    }

    Platform.init({
        id_platform: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,

        modelName: 'Platform',
        updatedAt: false,
        freezeTableName: true,
        createdAt: false,
    });
    return Platform;

};