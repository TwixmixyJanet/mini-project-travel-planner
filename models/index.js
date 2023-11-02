// import models
const Traveller = require('./Traveller');
const Location = require('./Location');
const Trip = require('./Trip');
const LocationTrip = require('./LocationTrip');


Location.belongsTo(Traveller, {
  foreignKey: 'traveller_id'
 });

Traveller.hasMany (Location, {
  foreignKey: 'location_id'
 });
 
Location.belongsToMany(Trip,{
  through: LocationTrip,
  foreignKey: 'location_id',
});

Trip.belongsToMany(Location,{
  through: LocationTrip,
  foreignKey: 'trip_id',
});

module.exports = {
  Traveller,
  Location,
  Trip,
};
