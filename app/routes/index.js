
/**
 * Module dependencies
 */

import { Router } from 'express';
import  pokemonRouter  from './pokemon';

//initialize router
const router = Router();

//pokemon route
router.use('/api/v1/pokemon', pokemonRouter);

//default route
router.get('/', (req,res) => {
  res.status(200).json({msg: 'Welcome to Pokemon Live'});
});

//catch all other routes
router.all('*',(req, res) => {
  res.status(404).json({msg: 'route not found'});
});


//export router 
module.exports = router;

