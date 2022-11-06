'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class GamesSystemRequirements extends Model {

    }

    GamesSystemRequirements.init({
        id_game: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        so: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        storage: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        cpu: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        memory: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        gpu: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        directx: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        internet: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        other: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        sequelize,
        modelName: 'GamesSystemRequirements',
    });
    return GamesSystemRequirements;
};