const router = require('express').Router();
const { Traveller, Location, Trip } = require('../../models');

router.get('/', async (req, res) => {
  try {
      const travellerData = await Traveller.findAll();
      res.status(200).json(travellerData)
  } catch (err) {
      res.status(500).json(err);
  }
});
  
router.get('/:id', async (req, res) => {
  try {
      const travellerData = await Traveller.findByPk(req.params.id, {
          include: [{ model: Location, through: Trip, as: 'planned_trips' }]
      });
      
      if (!travellerData) {
          res.status(404).json({ message: "Could not find that traveller"});
          return;
      }
      res.status(200).json(travellerData);
  } catch (err) {
      res.status(500).json(err);
  }
});
  
router.post('/', async (req, res) => {
  try {
      const travellerData = await Traveller.create(req.body);
      res.status(200).json(travellerData);
      console.log('Added new traveller!');
    } catch (err) {
      res.status(500).json(err);
    };
});
  
// router.put('/:id', async (req, res) => {
//   try {
//       const updateTraveller = await Traveller.update({
//         name: req.body.name
//       },
//       {
//         where: {
//           id: req.params.id
//         }
//       });
  
//       const travellerID = await Traveller.findByPk(req.params.id, {
//         include: [{ model: Location }]
//       });
  
//       if (!travellerID) {
//         res.status(200).json({ message: 'Could not find that traveller' });
//         return;
//       };
  
//       res.status(200).json(updateTraveller);
//       console.log("Updated Traveller!")
//     } catch (err) {
//       res.status(500).json(err);
//     }
// });
  
router.delete('/:id', async (req, res) => {
  try {
      const travellerData = await Traveller.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!travellerData) {
        res.status(404).json({ message: 'Could not find that traveller' });
        return;
      };
  
      res.status(200).json(destroyTraveller);
      console.log('This Traveller has been destroyed!')
    } catch {
      res.status(500).json(err);
    };
});
  
  module.exports = router;