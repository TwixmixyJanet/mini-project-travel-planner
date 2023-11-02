const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class LocationTrip extends Model {}

LocationTrip.init (
    {
        id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        location_id: {
            type: DataType.INTEGER,
            allowNull: false,
            references: {
                model: 'Location',
                key: 'id',
            },
        },
        trip_id: {
            type: DataType.INTEGER,
            allowNull: false,
            references: {
                model: 'Trip',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'location_trip',
      },
    );

module.exports = LocationTrip;