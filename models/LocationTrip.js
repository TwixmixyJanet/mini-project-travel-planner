// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class LocationTrip extends Model {}

// LocationTrip.init (
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         location_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             references: {
//                 model: 'Location',
//                 key: 'id',
//             },
//         },
//         trip_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             references: {
//                 model: 'Trip',
//                 key: 'id',
//             },
//         },
//     },
//     {
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'location_trip',
//       },
//     );

// module.exports = LocationTrip;