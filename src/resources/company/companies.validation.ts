import Joi from 'joi';
const create = Joi.object({
    name: Joi.string().max(60).required(),
    tax_id: Joi.string().max(200),
    image: Joi.string().max(200),
    company_type_id: Joi.number().required().max(20), // add limits by min and max id
    phone_number: Joi.string().max(20).required(), //figure out validation of a phone number, joi-phone-number
    email: Joi.string().email().required(),
    owner_id: Joi.number().required().min(1).max(99999999),
    country_id: Joi.number().required().min(1).max(500),
});

export default { create };
