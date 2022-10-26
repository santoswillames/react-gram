require("dotenv").config();

const express = require("express");
// Modulo do própio node para trabalhar com com diretório, vamos usar para salvar as imagens
const path = require("path");
const cors = require("cors");

const port = process.env.PORT;

const app = express();

// config JSON and form data response
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Solve cors
app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5173",
  })
);

// Upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// DB connection
require("./config/db.js");

//routes
const router = require("./routes/Router");
app.use(router);

app.listen(port, () => {
  console.log(`App rodando na porta ${port}, acesse http://localhost:${port}`);
});
