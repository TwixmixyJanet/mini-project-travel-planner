const router = require('express').Router();
const { Traveller, Location, Trip, LocationTrip } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const LocationsAll = await Location.findAll({
            include: [{ model: Trip }]
        });
        
        if (!LocationsAll) {
            res.status(200).json({ message: "No Locations found"});
            return;
        }
    } catch (err) {
        res.status(500).json(err);
    }
  });
  
  router.get('/:id', async (req, res) => {
    try {
        const LocationID = await Location.findByPk(req.params.id, {
            include: [{ model: Trip }]
        });
        
        if (!LocationID) {
            res.status(200).json({ message: "Could not find that Location"});
            return;
        }
    } catch (err) {
        res.status(500).json(err);
    }
  });
  
  router.post('/', async (req, res) => {
    try {
        const newLocation = await Location.create({
          name: req.body.name
        });
    
        res.status(200).json(newLocation);
        console.log('Added new Location!');
    
      } catch (err) {
        res.status(500).json(err);
      };
  });
  
router.post('/', (req, res) => {
    /* req.body should look like this...
      {
        location_name: "Basketball",
        ???price: 200.00,
        ???stock: 3,
        ???tripIds: [1, 2, 3, 4]
      }
    */
    Location.create(req.body)
      .then((location) => {
        if (req.body.tripIds.length) {
          const locationTripIdArr = req.body.tripIds.map((trip_id) => {
            return {
              location_id: location.id,
              trip_id,
            };
          });
          return locationTrip.bulkCreate(locationTripIdArr);
        }
        res.status(200).json(location);
      })
      .then((locationTripIds) => res.status(200).json(locationTripIds))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });
  
  router.put('/:id', (req, res) => {
    location.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((location) => {
        if (req.body.tripIds && req.body.tripIds.length) {
          
          locationTrip.findAll({
            where: { location_id: req.params.id }
          }).then((locationTrips) => {
            const locationTripIds = locationTrips.map(({ trip_id }) => trip_id);
            const newlocationTrips = req.body.tripIds
            .filter((trip_id) => !locationTripIds.includes(trip_id))
            .map((trip_id) => {
              return {
                location_id: req.params.id,
                trip_id,
              };
            });
  
            const locationTripsToRemove = locationTrips
            .filter(({ trip_id }) => !req.body.tripIds.includes(trip_id))
            .map(({ id }) => id);

            return Promise.all([
              locationTrip.destroy({ where: { id: locationTripsToRemove } }),
              locationTrip.bulkCreate(newLocationTrips),
            ]);
          });
        }
  
        return res.json(location);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  router.delete('/:id', async (req, res) => {
    try {
        const destroyLocation = await Location.destroy({
          where: {
            id: req.params.id
          }
        });
    
        if (!destroyLocation) {
          res.status(200).json({ message: 'Could not find that Location' });
          return;
        };
    
        res.status(200).json(destroyLocation);
        console.log('This Location has been destroyed!')
      } catch {
        res.status(500).json(err);
      };
  });
  
  module.exports = router;