'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Game extends Model {
      static associate(models) {
        Game.hasMany(models.Purchase), {};
        Game.hasMany(models.Cart_item), {};
        Game.hasMany(models.Game_system_requirements), {};
        Game.hasMany(models.Game_platform), {};
        Game.hasMany(models.Game_image), {};
        Game.hasMany(models.Game_genre), {};
        Game.hasMany(models.Game_language_support), {};
        Game.hasMany(models.Game_gamemode), {};
      }
    }
    Game.init({
        id_game: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        price: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        discount: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        isDiscountActive: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        gameActive: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue:true,
        },  
        pyblisher:{
          type :DataTypes.STRING,
          allowNull: true,
        },   
        releaseDate:{
          type: DataTypes.DATEONLY,
          allowNull: false,              
        },
        developer:{
          type :DataTypes.STRING,
          allowNull: true,
        }            
    }, {
        sequelize,
        modelName: 'Game',
        updatedAt: false,
        freezeTableName: true,
        createdAt: false,
    });
    return Game;
};

