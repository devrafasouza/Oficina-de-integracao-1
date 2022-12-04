'use strict';
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