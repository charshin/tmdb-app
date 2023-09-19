import Joi from 'joi';

export const Movie = Joi.object({
  id: Joi.number().required(),
  title: Joi.string().required(),
  backdrop_path: Joi.string().allow(null).required(),
  poster_path: Joi.string().allow(null).required(),
  release_date: Joi.string().allow(''),
})
  .unknown()
  .meta({ className: 'Movie' });
