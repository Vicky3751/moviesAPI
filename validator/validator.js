//Joi is a package used for validation of proper data before saving it to the mongodb database
const Joi = require("@hapi/joi");

const checker = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(1).required(),
    title: Joi.string().min(10),
    overview: Joi.string().min(25),
    ratings: Joi.number().min(0).max(5),
    imageurl: Joi.string(),
  });
  return schema.validate(data);
};

module.exports.checker = checker;
