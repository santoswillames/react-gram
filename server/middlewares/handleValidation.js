const { validationResult } = require("express-validator");

const validate = (req, res, next) => {
  const errors = validationResult(req);

  // Se não houver erro, prosseguimos com a requisição
  if (errors.isEmpty()) {
    return next();
  }

  const extractedErros = [];

  errors.array().map((err) => extractedErros.push(err.msg));

  //Consumir o erro no front-end
  return res.status(422).json({
    errors: extractedErros,
  });
};

module.exports = validate;
