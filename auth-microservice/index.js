require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");

const app = express();
app.use(express.json());
app.use("/", authRoutes);

// Connexion DB + lancement serveur
connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Auth service running on port ${process.env.PORT}`);
  });
});
