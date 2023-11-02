const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Traveller extends Model {}

Traveller.init(
  {
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'traveler',
  }
);

module.exports = Traveller;
