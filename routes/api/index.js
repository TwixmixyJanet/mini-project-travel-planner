const router = require('express').Router();
const locationRoutes = require('./location-routes');
const travellerRoutes = require('./traveller-routes');
const tripRoutes = require('./trip-routes');

router.use('./location', locationRoutes);
router.use('./traveller', travellerRoutes);
router.use('./trip', tripRoutes);

module.exports = router