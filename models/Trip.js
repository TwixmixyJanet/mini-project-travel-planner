const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Trip extends Model {}

Trip.init(
{
  id: { 
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  trip_budget: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  traveller_amount: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  traveller_id: {
    type: DataType.INTEGER,
    allowNull: false,
    references:{
      model: 'Traveller',
      key: 'id',  
    }
  },
  location_id: {
    type: DataType.INTEGER,
    allowNull: false,
    references:{
      model: 'Location',
      key: 'id',  
    }
  },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'trip',
  }
);

module.exports = Trip;
