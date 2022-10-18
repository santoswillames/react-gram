const User = require("../models/User");
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

const authGuard = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  // Verifica se o authHeader existe, se não existir eu nao tenho o Token
  const token = authHeader && authHeader.split(" ")[1];

  // Check if header has a token
  if (!token) return res.status(401).json({ errors: ["Acesso negado!"] });

  // Check if token is valid
  try {
    // Compara o token com o jwt secret
    const verified = jwt.verify(token, jwtSecret);

    //Tenta encontrar o usuário por id
    req.user = await User.findById(verified.id).select("-password"); // select -password retira a senha para não trafegar
    next();
  } catch (error) {
    res.status(401).json({ errors: ["Token inválido."] });
  }
};

module.exports = authGuard;
