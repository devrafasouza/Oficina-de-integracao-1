'use strict';
const database = require('../models');
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Genre extends Model {
      static associate(models) {
      }
    }

    Genre.init({
        id_genre: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Genre',
        updatedAt: false,
        freezeTableName: true,
        createdAt: false,
    });
    return Genre;
};
