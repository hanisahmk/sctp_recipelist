// components/SimpleForm.js

import Joi from "joi-browser";

const schema = {
  name: Joi.string().min(1).max(20).required(),
  email: Joi.string().email().required(),
  age: Joi.number().min(1).max(100).required(),
};

// components/SimpleForm.js
const validate = (event) => {
  const { name, value } = event.target;
  const objToCompare = { [name]: value };
  const subSchema = { [name]: schema[name] };

  const result = Joi.validate(objToCompare, subSchema);
  const { error } = result;
  return error ? error.details[0].message : null;
};

const handlerOnSubmit = (event) => {
  event.preventDefault();
  const result = Joi.validate(user, schema, { abortEarly: false });
};

handlerOnChange = (event) => {
  if (process.env.NODE_ENV === "development") console.log("userData", userData);
};
