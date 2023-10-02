import Joi from 'joi';

import { Cast } from './cast';

export const Movie = Joi.object({
  id: Joi.number().required(),
  title: Joi.string().required(),
  overview: Joi.string().required(),
  backdrop_path: Joi.string().allow(null).required(),
  poster_path: Joi.string().allow(null).required(),
  runtime: Joi.number(),
  release_date: Joi.string().allow(''),
  credits: Joi.object({
    cast: Joi.array().items(Cast).required(),
  }).unknown(),
})
  .unknown()
  .meta({ className: 'Movie' });
