const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

// função que gera o token - Generate user token
const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: "7d",
  });
};

// Função para rgistar e logar - Register user and sign in
const register = async (req, res) => {
  res.send("Registro");
};

module.exports = {
  generateToken,
  register,
};
