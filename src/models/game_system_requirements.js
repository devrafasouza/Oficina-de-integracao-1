'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Game_system_requirements extends Model {
        static associate(models) {
            Game_system_requirements.belongsTo(models.Game), {
                foreignKey: 'id_game',
                constraint: true,
            };
          }
    }

    Game_system_requirements.init({
        id_game: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: 'Game'
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
        modelName: 'Game_system_requirements',
        updatedAt: false,
        freezeTableName: true,
        createdAt: false,
    });
    return Game_system_requirements;
};