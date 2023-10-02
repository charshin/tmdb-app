import Joi from 'joi';

export const Cast = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  gender: Joi.number().required(),
  character: Joi.string().required(),
  profile_path: Joi.string().allow(null).required(),
})
  .unknown()
  .meta({ className: 'Cast' });
