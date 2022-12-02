'use strict';

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Game_genre extends Model {
      static associate(models) {
        Game_genre.belongsTo(models.Game);
        Game_genre.belongsTo(models.Genre);
         
      models.Genre.belongsToMany(models.Game, { through: 'Game_genre' });
      models.Game.belongsToMany(models.Genre, { through: 'Game_genre'});
      Game_genre.belongsTo(models.Game);
      Game_genre.belongsTo(models.Genre);
      models.Game.hasMany(models.Game_genre);
      models.Genre.hasMany(models.Game_genre);
      }
    }
    Game_genre.init({  
      id_gamegenre: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },   
      id_game: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: 'Game'
      },
      id_genre: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: 'Genre'
      },
    }, {
        sequelize,
        modelName: 'Game_genre',
        updatedAt: false,
        freezeTableName: true,
        createdAt: false,
    });
    return Game_genre;
};
