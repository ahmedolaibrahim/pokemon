import { Router } from 'express';
import { asyncErrorHandler } from '../utils/middleware/errorHandler';

const pokemonRouter =  Router();

pokemonRouter.get('/',asyncErrorHandler(async (req, re, next) => {
    res.send("pokemon route goes here");
}));


module.exports = pokemonRouter;