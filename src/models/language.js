'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Language extends Model {
      static associate(models) {
        Language.hasMany(models.Game_language_support), {};
      }
    }

    Language.init({
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
        modelName: 'Language',
        updatedAt: false,
        freezeTableName: true,
        createdAt: false,
    });
    return Language;
};