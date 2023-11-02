// import models
const Traveller = require('./Traveller');
const Locaiton = require('./Location');
const Trip = require('./Trip');

// Traveller have many locations
 Traveller.belongsTo(Location, {
  foreignKey: 'location_id'
 });
// Products belongToMany Tags (through ProductTag)
 Product.hasMany (Trip, {
  foreignKey: 'trip_id'
 });
 Trip.belongsTo(Product, {
  foreignKey: 'product_id'
 })

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Traveller,
  Location,
  Trip,
};
