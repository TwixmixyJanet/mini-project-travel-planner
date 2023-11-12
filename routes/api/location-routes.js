const router = require('express').Router();
const { Traveller, Location, Trip } = require('../../models');

router.get('/', async (req, res) => {
  try {
      const locationData = await Location.findAll();
      console.log(locationData);
      const locations = locationData.map((location) => location.get({ plain: true }));
      console.log("locations", locations);
      res.status(200).json(locationData);
  } catch (err) {
      res.status(500).json(err);
  }
});
  
router.get('/:id', async (req, res) => {
  try {
      const locationData = await Location.findByPk(req.params.id, {
          include: [{ model: Traveller, through: Trip, as: 'location_travellers' }]
      });
      
      if (!locationData) {
          res.status(200).json({ message: "Could not find that Location"});
          return;
      }
      res.status(200).json(locationData);
  } catch (err) {
      res.status(500).json(err);
  }
});
  
router.post('/', async (req, res) => {
  try {
      const newLocation = await Location.create(req.body);
  
      res.status(200).json(newLocation);
      console.log('Added new Location!');
  
    } catch (err) {
      res.status(400).json(err);
    };
});
  
router.delete('/:id', async (req, res) => {
  try {
      const locationData = await Location.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!locationData) {
        res.status(404).json({ message: 'Could not find that Location' });
        return;
      };
  
      res.status(200).json(destroyLocation);
      console.log('This Location has been destroyed!')
    } catch {
      res.status(500).json(err);
    };
});
  
  module.exports = router;