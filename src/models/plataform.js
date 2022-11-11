'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Plataform extends Model {

    }

    Plataform.init({
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
        modelName: 'Plataform',
        updatedAt: false,
        freezeTableName: true,
        createdAt: false,
    });
    return Plataform;
};