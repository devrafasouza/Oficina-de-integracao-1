'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Languages extends Model {

    }

    Languages.init({
        id_language: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        enUS_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        native_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        ptBR_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Languages',
    });
    return Languages;
};