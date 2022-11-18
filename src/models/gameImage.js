'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class GameImage extends Model {

    }

    GameImage.init({
        id_game: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        url: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        type: {
          type: DataTypes.STRING,
          allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'GameImage',
        updatedAt: false,
        freezeTableName: true,
        createdAt: false,
    });
    return GameImage;
};
