require("dotenv").config();
const express = require("express");
const chars = require("./routes/chars");
const settings = require("./routes/settings");
const cors = require("cors");
const cords = require("./routes/cords");

const app = express();
const port = process.env.PORT || 4000;

const allowedOrigins = [
  "http://localhost:5173",
  "https://blog-api-client-silk.vercel.app",
];
const corsOptions = {
  origin: allowedOrigins,
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/chars", chars);
app.use("/settings", settings);
app.use("/cords", cords);

app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`Listening on port: ${port}`);
});
