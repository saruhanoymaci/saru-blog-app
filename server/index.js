const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

const app = express();
const port = 3000;

connectDB();

app.use(express.json());

app.use(cors());
app.use("/api/auth", userRoutes);

app.get("/", (req, res) => {
  res.send("MERN API çalışıyor!");
});
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});
