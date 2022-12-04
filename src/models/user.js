'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
      static associate(models) {
   
      }
    }

    User.init({
        id_user: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        cpf: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: "Default",

        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        activeState: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        
    }, {
        sequelize,
        modelName: 'User',
        updatedAt: false,
        freezeTableName: true,
        createdAt: false,

    });
    return User;
};