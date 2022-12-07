'use strict';
const database = require('../models');


const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Game extends Model {
      
      static associate(models) {
     
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
            unique: true,
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
        publisher:{
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

