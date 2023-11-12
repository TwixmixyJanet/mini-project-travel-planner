const router = require('express').Router();
const { Trip } = require('../../models');

// router.get('/', async (req, res) => {
//     try {
//         const tripsAll = await Trip.findAll({
//             include: [{ model: Location }]
//         });
        
//         if (!tripsAll) {
//             res.status(200).json({ message: "No trips found"});
//             return;
//         }
//     } catch (err) {
//         res.status(500).json(err);
//     }
//   });
  
//   router.get('/:id', async (req, res) => {
//     try {
//         const tripID = await Trip.findByPk(req.params.id, {
//             include: [{ model: Location }]
//         });
        
//         if (!tripID) {
//             res.status(200).json({ message: "Could not find that trip"});
//             return;
//         }
//     } catch (err) {
//         res.status(500).json(err);
//     }
//   });
  
router.post('/', async (req, res) => {
  try {
      const tripData = await Trip.create(req.body);
      res.status(200).json(tripData);
      console.log('Added new trip!');
    } catch (err) {
      res.status(500).json(err);
    };
});
  
  // router.put('/:id', async (req, res) => {
  //   try {
  //       const updateTrip = await Trip.update({
  //         name: req.body.name
  //       },
  //       {
  //         where: {
  //           id: req.params.id
  //         }
  //       });
    
  //       const tripID = await Trip.findByPk(req.params.id, {
  //         include: [{ model: Location }]
  //       });
    
  //       if (!tripID) {
  //         res.status(200).json({ message: 'Could not find that trip' });
  //         return;
  //       };
    
  //       res.status(200).json(updateTrip);
  //       console.log("Updated trip!")
  //     } catch (err) {
  //       res.status(500).json(err);
  //     }
  // });
  
router.delete('/:id', async (req, res) => {
  try {
      const tripData = await Trip.destroy({
        where: { id: req.params.id }
      });
      if (!tripData) {
        res.status(404).json({ message: 'Could not find that trip' });
        return;
      };
      res.status(200).json(destroyTrip);
      console.log('This trip has been destroyed!')
    } catch {
      res.status(500).json(err);
    };
});
  
  module.exports = router;