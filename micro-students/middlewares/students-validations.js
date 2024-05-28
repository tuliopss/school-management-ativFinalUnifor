const { body } = require("express-validator");

const studentCreateValidations = () => {
  return [
    body("name")
      .isString()
      .withMessage("O nome é obrigatório.")
      .isLength({ min: 2 })
      .withMessage("O nome precisa de no mínimo 2 caracteres"),
    body("email")
      .isString()
      .withMessage("O e-mail é obrigatório")
      .isEmail()
      .withMessage("Insira um email válido"),
    body("age").isNumeric().withMessage("Insira uma idade válida"),

    body("grade").isString().withMessage("A série é obrigatória"),
    body("registration")
      .isString()
      .withMessage("O código de matrícula é obrigatório"),
  ];
};

const studentUpdateValidations = () => {};

module.exports = studentCreateValidations;
