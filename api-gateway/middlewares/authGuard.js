// const Teacher = require("../models/Teacher");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const authGuard = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  //check if a header has a token
  if (!token) return res.status(401).json({ errors: ["Acesso negado!"] });

  //check if token is valid
  try {
    const verified = jwt.verify(token, jwtSecret);

    // req.user = await User.findById(verified.id).select("-password");
    next();
  } catch (error) {
    res.status(401).json({ errors: ["Token inválido."] });
  }
};

module.exports = authGuard;
